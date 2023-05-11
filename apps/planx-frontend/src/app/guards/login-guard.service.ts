import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private readonly router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // FAKE login
    const localUser = localStorage.getItem('username');
    const isLoggedIn: boolean = (localUser && localUser !== '');
    if (isLoggedIn) {
      return of(isLoggedIn);
    } else {
      this.router.navigate(['login']).then();
    }
  }
}
