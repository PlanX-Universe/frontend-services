import { TestBed } from '@angular/core/testing';

import { LoginGuardService } from './login-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginGuardService', () => {
  let service: LoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(LoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
