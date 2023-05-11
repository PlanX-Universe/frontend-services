import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) {
  }

  public error(msg: string): void {
    this.openSnackBar(msg, "error-msg");
  }

  public success(msg: string): void {
    this.openSnackBar(msg, "success-msg");
  }

  private openSnackBar(message: string, type: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: type
    });
  }
}
