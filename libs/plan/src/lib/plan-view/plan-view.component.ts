import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '@planx-planning/solving';
import { NotificationService } from '@planx-planning/shared';
import { BehaviorSubject, Observable, of, TimeoutError } from 'rxjs';
import { MatTabGroup } from '@angular/material/tabs';
import { filter, map, switchMap, tap, timeout } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { Plan, PlanningResultsJsonResponse, PlanXError } from '../models';
import { environment } from 'apps/planx-frontend/src/environments/environment';

@Component({
  selector: 'planx-planning-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.scss']
})
export class PlanViewComponent implements OnInit {
  private readonly state: { [key: string]: any };
  requestId: string;

  readonly plan$: BehaviorSubject<Plan> = new BehaviorSubject<Plan>(null);
  readonly error$: BehaviorSubject<PlanXError> = new BehaviorSubject<PlanXError>(null);
  readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  @ViewChild('tabGroup', { static: false }) tabGroup: MatTabGroup;


  constructor(private readonly router: Router,
              private readonly ws: WebsocketService,
              private readonly notificationService: NotificationService) {
    // set current route state
    if (!this.router.getCurrentNavigation()?.extras?.state) {
      this.router.navigate(['home']).then(() => console.log('no routing State!'));
    } else {
      this.state = this.router.getCurrentNavigation()?.extras?.state;
    }
  }

  ngOnInit(): void {
    this.verifyAndHandleRoutingState(this.state);

    this.solvingResultsHandler(this.requestId).pipe(
      timeout(environment.requestTimeout)
    ).subscribe({
      next: (plan: Plan) => {
        this.plan$.next(plan);
      },
      error: (error: PlanXError | TimeoutError) => {
        if (error instanceof TimeoutError) {
          console.log('If the timeout was to short, replace "environment.requestTimeout". Current value in ms is:', environment.requestTimeout);
          this.notificationService.error('Request Timeout! Pls retry it later.');
          this.router.navigate(['modelling']).then();
        } else {
          this.notificationService.error('Error occurred while solving.');
          this.error$.next(error);
        }
        this.isLoading$.next(false);
      },
      complete: () => {
        this.isLoading$.next(false);
      }
    });
  }

  /**
   * routes back if there is no request id in routing state.
   * @private
   */
  private verifyAndHandleRoutingState(state: { [key: string]: any }): void {
    if (!state?.hasOwnProperty('requestId') || state.requestId === '') {
      this.router.navigate(['home']).then(() => console.log('state property requestId is missing!'));
    } else {
      this.requestId = state.requestId;
    }
  }

  private solvingResultsHandler(requestId: string): Observable<Plan> {
    return of(requestId).pipe(
      tap(() => {
        // cleanup
        this.plan$.next(null);
        this.ws.disconnect();
      }),
      filter(isNotNullOrUndefined),
      switchMap((rqId: string): Observable<MessageEvent> => {
        return this.ws.createWebsocket(rqId).pipe(
          tap(() => this.ws.disconnect())
        );
      }),
      map((msg: MessageEvent): PlanningResultsJsonResponse => {
        const dataJson: string = msg.data;
        return JSON.parse(dataJson);
      }),
      map((response: PlanningResultsJsonResponse): Plan => {
        if (!response.content || response.error) {
          throw response.error;
        }
        return response.content;
      }),
      tap({
        next: val => console.log('Handle response value: ', val),
        error: err => console.log('Handle response error: ', err)
      })
    );
  }
}
