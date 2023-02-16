import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: Router, useValue: routerMock }
      ],
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token')
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
