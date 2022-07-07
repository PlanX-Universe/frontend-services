import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemFunctionalityGraphComponent } from './system-functionality-graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';


@NgModule({
  declarations: [SystemFunctionalityGraphComponent],
  imports: [
    CommonModule,
    NgxGraphModule
  ],
  exports: [SystemFunctionalityGraphComponent]
})
export class SystemFunctionalityGraphModule {
}
