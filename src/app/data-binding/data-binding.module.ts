import { InputPropertyComponent } from './../input-property/input-property.component';
import { MeuFormModule } from './../meu-form/meu-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    InputPropertyComponent

  ],
  imports: [
    CommonModule,
    MeuFormModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
