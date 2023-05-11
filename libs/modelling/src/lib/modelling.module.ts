import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModellingOverviewComponent } from './modelling-overview/modelling-overview.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IdeEditorModule } from './editor/editor.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    // custom
    IdeEditorModule,
    MatToolbarModule
  ],
  declarations: [ModellingOverviewComponent],
  exports: [
    ModellingOverviewComponent
  ]
})
export class ModellingModule {
}
