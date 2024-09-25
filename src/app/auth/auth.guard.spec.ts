import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {

  let router: Router;

  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    router = jasmine.createSpyObj('Router', ['navigate']);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access if user is authenticated', () => {
    // Simula que el usuario está autenticado
    spyOn(localStorage, 'getItem').and.returnValue('true');

    // Simula ActivatedRouteSnapshot y RouterStateSnapshot
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = authGuard(route, state);

    expect(result).toBeTrue();
  });

  
});
