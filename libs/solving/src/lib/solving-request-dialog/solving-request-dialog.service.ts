import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SolvingRequestConfiguration } from './solving-request-configuration.model';
import { SolvingRequestDialogComponent } from './dialog-component/solving-request-dialog.component';

@Injectable()
export class SolvingRequestDialogService {
  constructor(private dialog: MatDialog) {
  }

  public openDialog(config?: SolvingRequestConfiguration): Observable<SolvingRequestConfiguration> {
    const dialogRef = this.dialog.open(SolvingRequestDialogComponent, {
      width: '30em',
      data: config
    });

    return dialogRef.afterClosed();
  }
}
