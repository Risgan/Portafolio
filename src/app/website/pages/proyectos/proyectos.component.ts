import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  images: string[] = [];

  constructor(
    private imageService: ImagesService
  ) {
  }

  async ngOnInit() {
    //    this.imageService.getImages().subscribe((data: string[]) => {
    //   this.images = data;
    //   console.log(this.images);
    // });
  }


}
