import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MockComponent, MockService } from 'ng-mocks';
import { IdeComponent } from '../../../../editor/src/lib/ide/ide.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SolvingRequestDialogService, SolvingService } from '@planx-planning/solving';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeTestingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatListModule,
        MatSidenavModule,
        MatTooltipModule,

        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [
        EditorComponent,
        MockComponent(IdeComponent)
      ],
      providers: [
        { provide: SolvingService, useValue: MockService(SolvingService) },
        { provide: DatePipe, useValue: MockService(DatePipe) },
        { provide: SolvingRequestDialogService, useValue: MockService(SolvingRequestDialogService) }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
