import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthenticationService } from '../authentication.service';

@Injectable() export class CursosService {

  private api = 'http://127.0.0.1:3000/cursos';

  constructor(
      private http: Http,
      private AuthenticationService: AuthenticationService) {}

  myList = [];

  findAll() {
        this.http.get(this.api)
            .subscribe(response => {
                this.myList = response.json();
            });
  }

  createItem(newItem) {
      var options = new RequestOptions({
        headers: new Headers({
          'Authorization': 'JWT '+this.AuthenticationService.token
        })
      });

      this.http.post(this.api, newItem, options)
          .subscribe(response => {
            this.myList.push(response.json());
        });
  }

  removeItem(item) {
        this.http.delete(`${this.api}/${item._id}`)
            .subscribe(response => {
                console.info(response.json());
                var index = this.myList.indexOf(item);
                this.myList.splice(index, 1);
            });

  }}
