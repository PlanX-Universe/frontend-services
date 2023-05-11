import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeComponent } from './ide.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { MockModule, MockService } from 'ng-mocks';
import { ConfirmDialogService } from '@planx-planning/shared';

describe('IdeComponent', () => {
  let component: IdeComponent;
  let fixture: ComponentFixture<IdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(AceEditorModule)
      ],
      declarations: [IdeComponent],
      providers: [{ provide: ConfirmDialogService, useValue: MockService(ConfirmDialogService) }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
