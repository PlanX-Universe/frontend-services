import { TestBed } from '@angular/core/testing';

import { SystemStatusService } from './system-status.service';
import { SharedModule } from '@planx-planning/shared';
import { MockModule } from 'ng-mocks';
import { DevUiRoutingModule } from '@planx-planning/dev-ui';

describe('SystemStatusService', () => {
  let service: SystemStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(SharedModule),
        DevUiRoutingModule
      ]
    });
    service = TestBed.inject(SystemStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
