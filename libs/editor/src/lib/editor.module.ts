import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeComponent } from './ide/ide.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@planx-planning/shared';

@NgModule({
  imports: [
    CommonModule,
    AceEditorModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [IdeComponent],
  exports: [IdeComponent]
})
export class EditorModule {
}
