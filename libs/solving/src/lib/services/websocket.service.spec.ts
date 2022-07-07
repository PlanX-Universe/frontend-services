import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { SolvingModule } from '@planx-planning/solving';
import { MockService } from 'ng-mocks';
import { NotificationService } from '@planx-planning/shared';

describe('WebsocketService', () => {
  let service: WebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SolvingModule],
      providers: [
        { provide: NotificationService, useValue: MockService(NotificationService) }
      ]
    });
    service = TestBed.inject(WebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
