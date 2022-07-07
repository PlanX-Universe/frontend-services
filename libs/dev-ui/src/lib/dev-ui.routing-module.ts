import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { DemoRequestComponent } from './demo-request/demo-request.component';
import { SystemStateModule } from './system-state/system-state.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { SystemStatusService } from './services/system-status.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SystemFunctionalityGraphModule } from './system-functionality-graph/system-functionality-graph.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RabbitMQAdminModule } from './rabbit-mqadmin/rabbit-mqadmin.module';
import { SharedModule } from '@planx-planning/shared';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    SystemStateModule,
    FontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    SystemFunctionalityGraphModule,
    MatTabsModule,
    FlexLayoutModule,
    RabbitMQAdminModule,
    SharedModule
  ],
  declarations: [
    DemoRequestComponent,
    AdminComponent
  ],
  providers: [SystemStatusService],
  exports: [RouterModule]
})
export class DevUiRoutingModule {
}
