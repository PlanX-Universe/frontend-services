import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SolvingService } from './services/solving.service';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WebsocketService } from './services/websocket.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  providers: [
    SolvingService,
    WebsocketService
  ]
})
export class SolvingModule {
}
