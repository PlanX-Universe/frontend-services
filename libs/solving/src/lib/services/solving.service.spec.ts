import { TestBed } from '@angular/core/testing';

import { SolvingService } from './solving.service';
import { SolvingModule } from '@planx-planning/solving';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SolvingService', () => {
  let service: SolvingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SolvingModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SolvingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
