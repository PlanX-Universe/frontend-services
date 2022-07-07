import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolvingRequestConfiguration } from '@planx-planning/solving';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'planx-planning-solving-request-dialog',
  templateUrl: './solving-request-dialog.component.html',
  styleUrls: ['./solving-request-dialog.component.scss']
})
export class SolvingRequestDialogComponent implements OnInit {
  configFormGroup: FormGroup;
  results: SolvingRequestConfiguration = { language: 'pddl', planner: '' };
  // TODO: outsource this configuration and make it dynamic
  readonly PLANNERS_GROUP: PlannerSelectionOptionGroup[] = [
    {
      name: 'State space planning',
      planners: [
        { display: 'Heuristic Search Planner', key: 'hsp', package: 'PDDL4J', languages: ['pddl'] },
        { display: 'Fast Forward Planner', key: 'ff', package: 'PDDL4J', languages: ['pddl'] },
        { display: 'Fast Forward Anytime Planner', key: 'ff-anytime', package: 'PDDL4J', languages: ['pddl'] },
        { display: 'Hill Climbing Anytime Planner', key: 'hc-anytime', package: 'PDDL4J', languages: ['pddl'] }
      ],
      disabled: false
    },
    {
      name: 'Hierarchical planning',
      planners: [],
      disabled: true
    }
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<SolvingRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SolvingRequestConfiguration) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // has to correspond with ConfigFormGroupData
    this.configFormGroup = this.fb.group({
      planner: ['hsp']
    });

    // set initial selection
    this.createResultConfigFromFormData(this.configFormGroup.getRawValue());

    this.configFormGroup.valueChanges.subscribe((form: ConfigFormGroupData) => {
      this.createResultConfigFromFormData(form);
    });

  }

  private createResultConfigFromFormData(form: ConfigFormGroupData) {
    this.results = {
      ...this.results,
      planner: form.planner
    };
  }
}

interface ConfigFormGroupData {
  planner: string
}

interface PlannerSelectionOptionGroup {
  name: string
  disabled: boolean
  planners: PlannerSelectionOption[]
}

interface PlannerSelectionOption {
  display: string
  key: string
  package?: string
  languages?: string[]
}
