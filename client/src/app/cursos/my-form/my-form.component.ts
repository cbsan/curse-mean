import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit, OnDestroy {

    title = 'Cursos';

    urlSubscrible: Subscription;
    id = '';

    newItem = {
        name: '',
        price: 0,
        category: ''
    };

    constructor(
        private cursosService: CursosService,
        private activatedRoute : ActivatedRoute, 
        private router : Router
    ) { }

    ngOnInit() {
        this.urlSubscrible = this.activatedRoute.params.subscribe((params: any) => {
            this.getItemById(params['id']);
        });
    }

    ngOnDestroy() {
        this.urlSubscrible.unsubscribe();
    }


    createItem() {
        this.cursosService.createItem(this.newItem);

        this.newItem = {name: '', price: 0, category: ''};
    }

    getItemById(id) {
        if (id) {
            this.newItem = this.cursosService.myList.find(item => item.name === id);
        } else {
            this.newItem = {name: '', price: 0, category: ''};
        }
    }
}
