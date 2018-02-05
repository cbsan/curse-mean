import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-list-curse',
  templateUrl: './list-curse.component.html',
  styleUrls: ['./list-curse.component.css']
})
export class ListCurseComponent implements OnInit {

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit() {
  }

  get myList() {
    return this.cursosService.myList;
  }

  removeItem(item) {
    this.cursosService.removeItem(item);
  }


}
