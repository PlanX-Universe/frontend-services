import { TestBed } from '@angular/core/testing';

import { RabbitApiService } from './rabbit-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@planx-planning/shared';

describe('RabbitApiService', () => {
  let service: RabbitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ]
    });
    service = TestBed.inject(RabbitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
