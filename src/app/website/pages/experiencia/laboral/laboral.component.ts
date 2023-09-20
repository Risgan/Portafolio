import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.scss']
})
export class LaboralComponent {
  
  @Input() Numero!: number;
  @Input() Empresa!:string;
  @Input() Cargo!:string;
  @Input() FechaInicial!:string;
  @Input() FechaFinal!:string;
  @Input() Actual = false;
  @Input() Funciones: string[]=[]
}
