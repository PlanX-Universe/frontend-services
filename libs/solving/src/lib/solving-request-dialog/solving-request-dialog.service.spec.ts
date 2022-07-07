import { TestBed } from '@angular/core/testing';

import { SolvingRequestDialogService } from './solving-request-dialog.service';
import { SolvingRequestDialogModule } from '@planx-planning/solving';

describe('SolvingRequestDialogService', () => {
  let service: SolvingRequestDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SolvingRequestDialogModule
      ]
    });
    service = TestBed.inject(SolvingRequestDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
