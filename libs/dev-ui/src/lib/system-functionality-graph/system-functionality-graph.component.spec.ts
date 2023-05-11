import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemFunctionalityGraphComponent } from './system-functionality-graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SystemFunctionalityGraphComponent', () => {
  let component: SystemFunctionalityGraphComponent;
  let fixture: ComponentFixture<SystemFunctionalityGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemFunctionalityGraphComponent],
      imports: [
        NgxGraphModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemFunctionalityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
