import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/shared/entities/proyecto';
import { ProyectosService } from 'src/app/shared/services/proyectos.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
    selector: 'app-proyecto',
    templateUrl: './proyecto.component.html',
    styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {


    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

    proyectos!: Proyecto[];

    images: any[]=[]


    constructor(
        private readonly proyectoService: ProyectosService
    ) { }


    ngOnInit(): void {

        console.log(this.proyectoService.getProductsData());

        this.proyectos = this.proyectoService.getProductsData();
        console.log( this.proyectos);
        
    }

}

//   images: any = [
//     {
//         src: "./../../../../../assets/images/svg/angularjs.svg"
//     },
//     {
//         src: "./../../../../../assets/images/svg/amazonwebservices.svg"
//     }, {
//         src: "./../../../../../assets/images/svg/csharp.svg"
//     }
//   ]