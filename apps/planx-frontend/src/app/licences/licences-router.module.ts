import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { LicencesComponent } from './licences.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: "",
    component: LicencesComponent
  }
];

@NgModule({
  declarations: [LicencesComponent],
  imports: [
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FlexModule,
    MatListModule,
    CommonModule,
    MatToolbarModule
  ],
  exports: [LicencesComponent]
})
export class LicencesRouterModule {
}
