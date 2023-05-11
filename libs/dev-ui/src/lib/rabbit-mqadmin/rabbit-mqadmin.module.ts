import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RabbitMQAdminComponent } from './rabbit-mqadmin.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RabbitMQAdminComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [RabbitMQAdminComponent]
})
export class RabbitMQAdminModule {
}
