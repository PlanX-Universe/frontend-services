import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencesComponent } from './licences.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('LicencesComponent', () => {
  let component: LicencesComponent;
  let fixture: ComponentFixture<LicencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatToolbarModule
      ],
      declarations: [LicencesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
