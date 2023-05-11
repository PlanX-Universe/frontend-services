import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFileDownloader } from '../util/DynamicFileDownloader';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { faAngleLeft, faAngleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SolvingRequestConfiguration, SolvingRequestDialogService, SolvingService } from '@planx-planning/solving';
import { filter, switchMap } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'planx-planning-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  /**
   * TODO: outsource config
   * languages config. Should be part of an external config!
   */
  readonly LANGUAGES: { display: string, displayShort: string, key: string, enabled: boolean }[] = [
    { display: 'Planning Domain Definition Language', displayShort: 'PDDL', key: 'PDDL', enabled: true },
    { display: 'Hierarchical Planning Domain Language', displayShort: 'HPDL', key: 'HPDL', enabled: false },
    {
      display: 'Extension to PDDL for Expressing Hierarchical Planning',
      displayShort: 'HDDL',
      key: 'HDDL',
      enabled: false
    },
    { display: 'SHOP', displayShort: 'SHOP', key: 'SHOP', enabled: false }
  ];

  modellingFormGroup: FormGroup;
  readonly sideNavIconOpen: IconDefinition = faAngleLeft;
  readonly sideNavIconClosed: IconDefinition = faAngleRight;
  readonly linkIcon: IconDefinition = faExternalLinkAlt;
  private domainCtrl: AbstractControl;
  private problemCtrl: AbstractControl;

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly solvingService: SolvingService,
    private readonly router: Router,
    private readonly datePipe: DatePipe,
    private readonly solvingRequestDialog: SolvingRequestDialogService
  ) {
    this.modellingFormGroup = fb.group({
      domain: ['', Validators.required],
      problem: ['', Validators.required],
      language: ['PDDL']
    });
  }

  ngOnInit(): void {
    this.domainCtrl = this.modellingFormGroup.get('domain');
    this.problemCtrl = this.modellingFormGroup.get('problem');

    this.loadSnippetsFromAssets();
  }

  onClickRun() {
    this.solvingRequestDialog.openDialog().pipe(
      filter(isNotNullOrUndefined),
      switchMap((setup: SolvingRequestConfiguration): Observable<string> => {
        return this.solvingService.requestSolvingByDomainAndProblem(
          this.domainCtrl.value,
          this.problemCtrl.value,
          setup.language,
          setup.planner
        );
      })
    ).subscribe({
      next: (requestId: String) => {
        console.log('Solving request is sent!', requestId);
        this.router.navigate(['plan'], { state: { requestId: requestId } })
          .then(() => console.log('wait for results'))
          .catch((err) => console.error('Something went wrong:', err));
      },
      error: err => console.error('failed to send request', err)
    });
  }

  downloadModel() {
    const fileEnd = this.modellingFormGroup.get('language')?.value.toLocaleLowerCase();
    const timeStamp = this.datePipe.transform(Date.now(), 'yyyy-MM-dd_hh-mm');
    const domainCode = this.domainCtrl?.value;
    const problemCode = this.problemCtrl?.value;
    DynamicFileDownloader.download(`domain_${timeStamp}.${fileEnd}`, domainCode);
    DynamicFileDownloader.download(`problem_${timeStamp}.${fileEnd}`, problemCode);
  }

  private loadSnippetsFromAssets() {
    this.http.get('assets/code-snippets/pddl/domain.pddl', { responseType: 'text' })
      .subscribe((code: string) => this.domainCtrl.setValue(code));
    this.http.get('assets/code-snippets/pddl/problem.pddl', { responseType: 'text' })
      .subscribe((code: string) => this.problemCtrl.setValue(code));
  }
}
