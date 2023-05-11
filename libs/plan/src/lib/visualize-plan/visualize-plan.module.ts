import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizePlanComponent } from './visualize-plan.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [VisualizePlanComponent],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  exports: [VisualizePlanComponent]
})
export class VisualizePlanModule {
}
