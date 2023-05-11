import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotificationService } from '@planx-planning/shared';
import { MockService } from 'ng-mocks';
import { MatDividerModule } from '@angular/material/divider';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        FontAwesomeTestingModule,
        MatDividerModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [{ provide: NotificationService, useValue: MockService(NotificationService) }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
