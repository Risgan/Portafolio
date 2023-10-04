import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/shared/entities/publicacion';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent {
  @Input() publicacion!: Publicacion;
  @Input() index!: number;


}
