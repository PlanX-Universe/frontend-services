import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditorComponent } from './editor.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@planx-planning/editor';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolvingModule, SolvingRequestDialogModule, SolvingService } from '@planx-planning/solving';


@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    EditorModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    FontAwesomeModule,
    SolvingRequestDialogModule,
    SolvingModule
  ],
  providers: [
    DatePipe,
    SolvingService
  ],
  exports: [EditorComponent]
})
export class IdeEditorModule {
}
