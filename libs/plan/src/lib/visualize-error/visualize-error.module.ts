import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { VisualizeErrorComponent } from "./visualize-error.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    VisualizeErrorComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [VisualizeErrorComponent]
})
export class VisualizeErrorModule {
}
