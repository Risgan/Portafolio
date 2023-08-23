import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';

const modules=[
  ButtonModule,
  SpeedDialModule,
  ToastModule,
  FieldsetModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules
  ]
})
export class PrimengModule { }
