import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemStateComponent } from './system-state.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [SystemStateComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatBadgeModule
  ],
  exports: [
    SystemStateComponent
  ]
})
export class SystemStateModule {
}
