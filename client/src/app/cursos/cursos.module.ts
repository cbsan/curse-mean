import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListCurseComponent } from './list-curse/list-curse.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListCurseComponent, MyFormComponent],
  declarations: [ListCurseComponent, MyFormComponent]
})
export class CursosModule { }
