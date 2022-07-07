import { TestBed } from '@angular/core/testing';

import { ConfirmDialogService } from '@planx-planning/shared';
import { CustomDialogModule } from './custom-dialog.module';

describe('ConfirmDialogService', () => {
  let service: ConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomDialogModule
      ]
    });
    service = TestBed.inject(ConfirmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
