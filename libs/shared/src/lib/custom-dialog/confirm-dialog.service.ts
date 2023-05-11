import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { DialogData } from './confirm-dialog/dialog-data';

@Injectable()
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) {
  }

  public openDialog(question: string, info?: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '30em',
      data: { question, info } as DialogData
    });

    return dialogRef.afterClosed();
  }
}
