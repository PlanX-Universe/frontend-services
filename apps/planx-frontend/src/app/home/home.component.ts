import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@planx-planning/shared';

@Component({
  selector: 'planx-planning-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly notificationService: NotificationService) {
  }

  ngOnInit(): void {

  }
}
