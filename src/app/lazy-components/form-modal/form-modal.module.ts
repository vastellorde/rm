import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModalComponent } from './form-modal/form-modal.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [FormModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormModalComponent
      }
    ])
  ]
})
export class FormModalModule { }
