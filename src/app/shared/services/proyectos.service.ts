import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  getProductsData() {
    return [
      {
        Titulo: "DMA",
        Descripcion: "Programa que permite el control de inventario para un dispositivo movil que permite la entrega de medicamentos por medio de un dispensador",
        Photos: [
          {
            src: "./../../../../../assets/images/png/dma/1.png"
          },
          {
            src: "./../../../../../assets/images/png/dma/2.png"
          },
          {
            src: "./../../../../../assets/images/png/dma/3.png"
          },
          {
            src: "./../../../../../assets/images/png/dma/4.png"
          },
          {
            src: "./../../../../../assets/images/png/dma/5.png"
          },
          {
            src: "./../../../../../assets/images/png/dma/6.png"
          },
        ]
      },
      {
        Titulo: "MC-Cronison",
        Descripcion: "Programa desarrollado para la Nasa permite monitorear el estado de salud de dos pilotos a una distancia de 30Km mostrando sus signos vitales y la geolocalizacion mientras van en un vehiculo tripulado, muestra las partes que componen dicho vehiculo y en casi de averia indica en que parte se encuentra el dispositivo para su cambio oportuno.",
        Photos: [
          {
            src: "./../../../../../assets/images/png/rover/1.png"
          },
          {
            src: "./../../../../../assets/images/png/rover/2.png"
          },
          {
            src: "./../../../../../assets/images/png/rover/3.png"
          },
          {
            src: "./../../../../../assets/images/png/rover/4.png"
          },
          {
            src: "./../../../../../assets/images/png/rover/5.png"
          },
          {
            src: "./../../../../../assets/images/png/rover/6.png"
          },
        ]
      },
      {
        Titulo: "Funnely",
        Descripcion: "Programa para el marketing digital, enfocado en estrategias para llegar a mas clientes con un menor esfuerzo usando grafias que permiten un mejor entendimiento del comportamiento del mercado.",
        Photos: [
          {
            src: "./../../../../../assets/images/png/funnely/1.png"
          },
          {
            src: "./../../../../../assets/images/png/funnely/2.png"
          },
          {
            src: "./../../../../../assets/images/png/funnely/3.png"
          },
        ]
      },
      {
        Titulo: "Sigess",
        Descripcion: "Programa enfocado en los procesos de seguridad y salud en el trabajo llevando un historico de riesgos y accidentes que ayuda a mitigar peligros dentro de una compañia.",
        Photos: [
          {
            src: "./../../../../../assets/images/png/sigess/1.png"
          },
          {
            src: "./../../../../../assets/images/png/sigess/2.png"
          },
          {
            src: "./../../../../../assets/images/png/sigess/3.png"
          },
        ]
      },
    ]
  }
}
