import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    RouterModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatDividerModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
