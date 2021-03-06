import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
      private Router: Router,
      private AuthenticationService: AuthenticationService
  ){}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{

    if (this.AuthenticationService.isLogged) {
      return true;
    }

    console.info('Àrea restrita! Favor efetuar login...');
    this.Router.navigate(['/login']);

    return false;
  }
}
