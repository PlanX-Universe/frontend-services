import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { SystemStatus } from '../models';
import { SystemStatusService } from '../services/system-status.service';

@Component({
  selector: 'planx-planning-system-state',
  templateUrl: './system-state.component.html',
  styleUrls: ['./system-state.component.scss']
})
export class SystemStateComponent implements OnInit {
  readonly statusSubject$: Subject<SystemStatus> =
    new BehaviorSubject<SystemStatus>(null);

  constructor(private readonly statusService: SystemStatusService) {
  }

  ngOnInit(): void {
    this.loadSystemStatus();
  }

  public forceReload() {
    // reload System Status
    this.statusSubject$.next(null); // clear old
    this.loadSystemStatus();
  }

  private loadSystemStatus(): void {
    this.statusService?.getSystemStatus()?.subscribe(
      (status: SystemStatus) => this.statusSubject$.next(status)
    );
  }
}


