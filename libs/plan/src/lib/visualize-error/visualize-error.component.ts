import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlanXError } from '@planx-planning/plan';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'planx-planning-visualize-error',
  templateUrl: './visualize-error.component.html',
  styleUrls: ['./visualize-error.component.scss']
})
export class VisualizeErrorComponent implements OnInit {

  @Input()
  error$: Observable<PlanXError> = of();
  stacktraceCtrl: FormControl = new FormControl('');
  errorMessageCtrl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.error$.pipe(
      tap((error: PlanXError) => {
        const stackTraceLines: string[] = error?.stackTrace || [];
        const stacktrace: string = stackTraceLines.join('\r\n');
        this.stacktraceCtrl.reset(stacktrace);
      }),
      tap((error: PlanXError) => {
        const errorMsg: string = error.errorMessage;
        this.errorMessageCtrl.reset(errorMsg);
      })
    ).subscribe();
  }
}
