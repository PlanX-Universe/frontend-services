import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { SystemStateComponent } from '../system-state/system-state.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SystemFunctionalityGraphModule } from '../system-functionality-graph/system-functionality-graph.module';
import { RabbitMQAdminModule } from '../rabbit-mqadmin/rabbit-mqadmin.module';
import { RabbitMQAdminComponent } from '../rabbit-mqadmin/rabbit-mqadmin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatTabsModule,
        FlexLayoutModule,
        FontAwesomeTestingModule,
        MatButtonModule,
        MatTooltipModule,
        NoopAnimationsModule,

        MockModule(SystemFunctionalityGraphModule),
        // MockModule(SharedModule)
      ],
      declarations: [
        AdminComponent,
        MockComponent(SystemStateComponent),
        MockComponent(RabbitMQAdminComponent)
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
