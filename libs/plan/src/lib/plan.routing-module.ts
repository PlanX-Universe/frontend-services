import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanViewComponent } from './plan-view/plan-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SolvingModule } from '@planx-planning/solving';
import { VisualizeErrorModule } from './visualize-error/visualize-error.module';
import { VisualizePlanModule } from './visualize-plan/visualize-plan.module';
import { LoadingModule } from '../../../../apps/planx-frontend/src/app/loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: PlanViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    SolvingModule,
    VisualizeErrorModule,
    VisualizePlanModule,
    LoadingModule
  ],
  declarations: [
    PlanViewComponent
  ],
  exports: [
    PlanViewComponent
  ]
})
export class PlanRoutingModule {
}
