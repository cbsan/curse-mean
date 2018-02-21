import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CursosService {

    private api = 'http://127.0.0.1:3000/cursos/';

    constructor(
        private http: Http
    ) { }
      
  	myList = [];

    findAll() {
        this.http.get(this.api)
            .subscribe(response => {
                this.myList = response.json();
            });
    }

    createItem(newItem){
      this.http.post(this.api, newItem)
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
      
    }
}
