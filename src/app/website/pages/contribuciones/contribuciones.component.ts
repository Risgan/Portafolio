import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/shared/entities/publicacion';
import { Reconocimiento } from 'src/app/shared/entities/reconocimiento';
import { ContribucionService } from 'src/app/shared/services/contribucion.service';

@Component({
  selector: 'app-contribuciones',
  templateUrl: './contribuciones.component.html',
  styleUrls: ['./contribuciones.component.scss']
})
export class ContribucionesComponent implements OnInit {

  ltsContribuciones!: Publicacion[];
  ltsReconocimientos!: Reconocimiento[];

  constructor(
    private contribucionService: ContribucionService
  ) {

  }

  ngOnInit(): void {
    this.ltsContribuciones = this.contribucionService.getPublicaciones();
    this.ltsReconocimientos = this.contribucionService.getReconocimientos();
  }

}
