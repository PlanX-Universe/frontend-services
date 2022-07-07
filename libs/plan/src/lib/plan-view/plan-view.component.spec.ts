import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewComponent } from './plan-view.component';
import { MockModule } from 'ng-mocks';
import { LoadingModule } from '../../../../../apps/planx-frontend/src/app/loading/loading.module';
import { VisualizePlanModule } from '../visualize-plan/visualize-plan.module';
import { VisualizeErrorModule } from '../visualize-error/visualize-error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SolvingModule } from '@planx-planning/solving';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PlanViewComponent', () => {
  let component: PlanViewComponent;
  let fixture: ComponentFixture<PlanViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(LoadingModule),
        MockModule(VisualizePlanModule),
        MockModule(VisualizeErrorModule),
        MockModule(SolvingModule),
        MatSnackBarModule,
        RouterTestingModule
      ],
      declarations: [PlanViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
