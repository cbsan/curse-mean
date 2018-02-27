import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {

  isLogged = false;
  token = '';
  url = 'http://127.0.0.1:3000/login';

  constructor(
    private Http: Http
  ) {
  }

  login(user, callback) {
    this.Http.post(this.url, user)
    .subscribe(response => {
      var resp = response.json();

      if (resp.message === 'ok') {
        this.isLogged = true;
        this.token = resp.token;
      } else {
        this.isLogged = false;
      }
      callback(this.isLogged);
    })
  }
}
