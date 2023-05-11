import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolvingRequestDialogComponent } from './dialog-component/solving-request-dialog.component';
import { SolvingRequestDialogService } from './solving-request-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SolvingRequestDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    SolvingRequestDialogService
  ]
})
export class SolvingRequestDialogModule {
}
