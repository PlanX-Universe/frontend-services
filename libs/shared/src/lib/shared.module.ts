import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './sevices/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DndDirective } from './directives/dnd.directive';
import { CustomDialogModule } from './custom-dialog/custom-dialog.module';
import { RabbitApiService } from './sevices/rabbit-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    CustomDialogModule
  ],
  providers: [
    NotificationService,
    RabbitApiService
  ],
  declarations: [DndDirective],
  exports: [DndDirective]
})
export class SharedModule {
}
