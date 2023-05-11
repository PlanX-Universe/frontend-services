import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan, PlanType } from '../models';
import { filter, tap } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'planx-planning-visualize-plan',
  templateUrl: './visualize-plan.component.html',
  styleUrls: ['./visualize-plan.component.scss']
})
export class VisualizePlanComponent implements OnInit {
  readonly PlanType = PlanType;

  @Input()
  plan$: Observable<Plan> = of();

  planType: PlanType = PlanType.Sequential;

  ngOnInit(): void {
    this.plan$.pipe(
      filter(isNotNullOrUndefined),
      tap((plan: Plan) => {
        // TODO: Select depending on the PLAN!
        // switch to correct mode
        this.planType = PlanType.Sequential;
      })
      // TODO: destroy subscription
    ).subscribe();
  }

  /**
   * TODO: should be part of a pipe
   * @param paramTypes parameter type names
   */
  parameters2String(paramTypes: string[]): string {
    const text = paramTypes?.join(', ') || '';
    return `(${text})`;
  }
}
