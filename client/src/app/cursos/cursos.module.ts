import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListCurseComponent } from './list-curse/list-curse.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CursosService } from './cursos.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListCurseComponent, MyFormComponent],
  declarations: [ListCurseComponent, MyFormComponent],
  providers: [CursosService]
})
export class CursosModule { }
