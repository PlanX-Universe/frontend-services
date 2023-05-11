import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent, ModellingModule, ModellingOverviewComponent } from '@planx-planning/modelling';

const routes: Routes = [
  {
    path: '',
    component: ModellingOverviewComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModellingModule
  ]
})
export class ModellingRoutingModule {
}
