import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/shared/entities/experiencia';
import { ExperienciaService } from 'src/app/shared/services/experiencia.service';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit{
  
  ltsExperiencia!:Experiencia[];
  
  constructor(
    private experienciaService: ExperienciaService
  ) {
   
    
  }


  async ngOnInit() {
    // var experiencia = 
    this.ltsExperiencia = this.experienciaService.getExperiencias()
    // console.log(this.ltsExperiencia,this.experienciaService.getExperiencias())

  }

}
