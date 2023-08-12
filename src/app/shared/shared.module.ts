import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PrimengModule } from './primeng/primeng.module';
import { DownloadButtonComponent } from './components/download-button/download-button.component';

const modules=[
  PrimengModule
]

const components =[
  ButtonComponent,
  DownloadButtonComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules,
    components
  ]
})
export class SharedModule { }
