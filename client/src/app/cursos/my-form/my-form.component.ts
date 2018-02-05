import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

    title = 'Cursos';

    newItem = {
        name: '',
        price: 0,
        category: ''
    };

    constructor(
        private cursosService: CursosService
    ) { }

    ngOnInit() {
    }


    createItem() {
        this.cursosService.createItem(this.newItem);

        this.newItem = {
            name: '',
            price: 0,
            category: ''
        };
    }
}
