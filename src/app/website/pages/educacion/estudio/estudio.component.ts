import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent {
  @Input() Instituto!: string;
  @Input() Carrera!:string;
  @Input() FechaInicial?:string;
  @Input() FechaFinal!:string;
  @Input() Actual: boolean = false;
  @Input() Descripcion?: string[]=[]
}
