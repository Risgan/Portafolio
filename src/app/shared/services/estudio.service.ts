import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor() { }

  
  getEstudios() {
    return [
      {
        Instituto: "Universidad ECCI",
        Carrera: "Estudiante octavo semestre Ingenieríaelectrónica",
        FechaInicial: "2016",
        FechaFinal: "2024",
        Actual: true,
        Descripcion: [
          "Promedio ponderado 4,5.",
          "Participación semillero de investigación IEEE.",
          "Publicación en IEEE Global Humanitarian.Technology Conference (GHTC) 2020. Desarrollo deSmartband para monitorear desde el hogar lossignos vitales de pacientes con SARS COV 2.",
          "Premio al primer lugar en proyecto NASA humanexploration rover challenge 2020 y proyectos STEM.",
        ],
      },
      {
        Instituto: "SENA Centro Eléctrico, Electrónico yTelecomunicaciones",
        Carrera: "Tecnólogo en Mantenimiento EléctricoIndustrial",
        FechaFinal: "Graduado Diciembre 2011",
        Actual: false,
      },
      {
        Instituto: "Gimnasio Monseñor Manuel María Camargo",
        Carrera: "Bachiller académico",
        FechaFinal: "Graduado Diciembre 2009",
        Actual: false,
      },
      // {
      //   Instituto: "",
      //   Carrera: "",
      //   FechaInicial: "",
      //   FechaFinal: "",
      //   Actual: false,
      //   Descripcion: [
      //     ""
      //   ],
      // },      
    ]
  }

}
