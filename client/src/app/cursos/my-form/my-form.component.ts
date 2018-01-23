import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

    title = 'Cursos';

    myList = [
        {
            name: 'Angular',
            price: 140,
            category: 'Front-End'
        },{
            name: 'Express',
            price: 180,
            category: 'Front-End'
        }
    ];

    newItem = {
        name: '',
        price: 0,
        category: ''
    };

    constructor() { }

    ngOnInit() {
    }


    createItem() {
        this.myList.push(this.newItem);

        this.newItem = {
            name: '',
            price: 0,
            category: ''
        };
    }

    removeItem(item) {
        var index = this.myList.indexOf(item);
        this.myList.splice(index, 1);
    }

}
