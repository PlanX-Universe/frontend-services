import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'planx-planning-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  readonly reloadIcon: IconDefinition = faSync;

  constructor() {
  }

  ngOnInit(): void {
  }

}
