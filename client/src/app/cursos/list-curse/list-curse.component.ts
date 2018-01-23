import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-curse',
  templateUrl: './list-curse.component.html',
  styleUrls: ['./list-curse.component.css']
})
export class ListCurseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

}
