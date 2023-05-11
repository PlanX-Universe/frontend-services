import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStateComponent } from './system-state.component';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockService } from 'ng-mocks';
import { SystemStatusService } from '../services/system-status.service';

describe('SystemStateComponent', () => {
  let component: SystemStateComponent;
  let fixture: ComponentFixture<SystemStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatBadgeModule,
        FlexLayoutModule
      ],
      declarations: [SystemStateComponent],
      providers: [
        { provide: SystemStatusService, useValue: MockService(SystemStatusService) }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
