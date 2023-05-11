import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellingOverviewComponent } from './modelling-overview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

describe('ModellingOverviewComponent', () => {
  let component: ModellingOverviewComponent;
  let fixture: ComponentFixture<ModellingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatCardModule],
      declarations: [ModellingOverviewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
