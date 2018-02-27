import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  isLogged = false;

  constructor() {

    setTimeout(() => {
      this.isLogged = true;
      console.info('is logged');

    }, 3000);
  }

}
