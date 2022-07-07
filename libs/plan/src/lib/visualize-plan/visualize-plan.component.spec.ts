import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePlanComponent } from './visualize-plan.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

describe('VisualizePlanComponent', () => {
  let component: VisualizePlanComponent;
  let fixture: ComponentFixture<VisualizePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatListModule
      ],
      declarations: [
        VisualizePlanComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
