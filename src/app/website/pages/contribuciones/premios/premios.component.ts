import { Component, Input } from '@angular/core';
import { Reconocimiento } from 'src/app/shared/entities/reconocimiento';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.scss']
})
export class PremiosComponent {
  @Input() reconocimiento!: Reconocimiento;
  @Input() Index!: number;
}
