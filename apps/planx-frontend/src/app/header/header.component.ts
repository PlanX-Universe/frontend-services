import { Component, OnInit } from '@angular/core';
import { faBars, faCog, faHome, faSignOutAlt, faEdit, faTasks } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from '@planx-planning/shared';

@Component({
  selector: 'planx-planning-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // https://fortawesome.com/sets/font-awesome-5-solid
  readonly menuIcon: IconDefinition = faBars;
  readonly logoutIcon: IconDefinition = faSignOutAlt;
  readonly settingsIcon: IconDefinition = faCog;
  readonly homeIcon: IconDefinition = faHome;
  readonly editIcon: IconDefinition = faEdit;
  readonly solutionIcon: IconDefinition = faTasks;
  readonly adminIcon: IconDefinition = faCog;
  readonly homeLink = environment.START_PAGE;

  readonly currentUser: string = localStorage.getItem('username');
  readonly version: string = environment.version;

  constructor(public router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('username');
    this.router.navigate(['login'])
      .then(() => this.notificationService.success('You\'re logged off!'))
      .catch(() => this.notificationService.error('Ups! Logout failed.'));
  }
}
