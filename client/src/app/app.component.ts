import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
