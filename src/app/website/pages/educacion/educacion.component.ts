import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/shared/entities/estudio';
import { EstudioService } from 'src/app/shared/services/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit{

  ltsEstudio!: Estudio[];

  constructor(
    private estudioService: EstudioService
  ) {
    
  }
  
  ngOnInit(): void {
    this.ltsEstudio = this.estudioService.getEstudios();
  }

}
