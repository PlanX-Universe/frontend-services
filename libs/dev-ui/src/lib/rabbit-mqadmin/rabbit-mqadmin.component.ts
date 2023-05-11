import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'apps/planx-frontend/src/environments/environment';

@Component({
  selector: 'planx-planning-rabbit-mqadmin',
  templateUrl: './rabbit-mqadmin.component.html',
  styleUrls: ['./rabbit-mqadmin.component.scss']
})
export class RabbitMQAdminComponent {
  readonly RabbitMQ_ADMIN: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.RabbitMQ_ADMIN = sanitizer.bypassSecurityTrustResourceUrl(environment.rabbitmqAdminDashboardUrl);
  }
}
