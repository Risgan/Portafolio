import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  getProductsData() {
    return [
      {
        Titulo: "Test",
        Descripcion: "asdfasdf",
        Photos: [
          {
            src: "./../../../../../assets/images/svg/angularjs.svg"
          },
          {
            src: "./../../../../../assets/images/svg/amazonwebservices.svg"
          },
        ]
      },
      {
        Titulo: "Test",
        Descripcion: "asdfasdf",
        Photos: [
          {
            src: "./../../../../../assets/images/svg/angularjs.svg"
          },
          {
            src: "./../../../../../assets/images/svg/amazonwebservices.svg"
          },
        ]
      }
    ]
  }
}
