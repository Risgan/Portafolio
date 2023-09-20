import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor() { }

  getExperiencias() {
    return [
      {
        Empresa: "Linktic",
        Cargo: "Full Stack Developer Junior",
        FechaInicial: "Agosto2022",
        FechaFinal: "",
        Actual: true,
        Funciones: [
          "Desarrollo en python.",
          "Mantenimiento plataforma web y móvil parafrontend y backend.",
          "Desarrollo en C#, Java, Spring Boot, Vue, Angular, Xamarin",
          "Implementación Lamdas AWS y Azure",
          "Manejo en Alfresco",
          "Desarrollo de módulos según requerimiento.",
          "Mejorar base de datos.",
          "Manejo repositorios GIT.",
          "Despliegue en ambientes de desarrollo, QA yproducción.",
          "Manejo de azure DEVOPS.",
        ],
      },
      {
        Empresa: "Universidad de Antioquia",
        Cargo: "Full Stack Junior",
        FechaInicial: "Julio 2023",
        FechaFinal: "Diciembre 2023",
        Actual: false,
        Funciones: [
          "Desarrollo full stack en .Net, C#.",
          "Manejo repositorios GIT.",
          "Despliegue en ambientes de desarrollo, QA yproducción.",
          "Manejo de azure DEVOPS",
        ],
      },      
      {
        Empresa: "Ler Prevencion",
        Cargo: "Full Stack Developer Junior",
        FechaInicial: "Octubre2021",
        FechaFinal: "Agosto 2022",
        Actual: false,
        Funciones: [
          "Mantenimiento plataforma web y móvil parafrontend y backend",
          "Implementar módulos según requerimiento",
          "Actualización para nuevas versiones",
          "Mejorar la experiencia de usuario",
        ],
      },
      {
        Empresa: "Sistran Andina",
        Cargo: "Back-end Developer",
        FechaInicial: "Julio 2021",
        FechaFinal: "Septiembre 2021",
        Actual: false,
        Funciones: [
          "Analizar requerimientos",
          "Implementar pruebas",
          "Documentar la implementación",
        ],
      },
      {
        Empresa: "Hydraulic Force SAS",
        Cargo: "Asistente Administrativo",
        FechaInicial: "Noviembre 2017",
        FechaFinal: "Julio 2021",
        Actual: false,
        Funciones: [
          "Mantenimiento a componentes hidráulicos y tarjetas electrónicas",
          "Puesta en marcha de variadores de velocidadpara unidades de micro-filtrado y contador departículas",
          "Funciones administrativas",
          "Se logro el desarrollo de software y hardwaredestinado a facilitar y agilizar procesosinternos y administrativos",
        ],
      },
      {
        Empresa: "Masivo Capital SAS",
        Cargo: "Asistente Infraestructura-AsistenteProgramación",
        FechaInicial: "Junio 2014",
        FechaFinal: "Septiembre 2017",
        Actual: false,
        Funciones: [
          "Analizar las rutas asignadas según oferta ydemanda",
          "Supervisar obras civiles en los distintosterminales",
          "Realizar control y asignación de activos fijos",
          "Se logra la implementación de VBA paraagilizar procesos internos",
        ],
      },
      {
        Empresa: "Solé Soluciones Empresariales",
        Cargo: "Técnico de Maquinaria",
        FechaInicial: "Abril 2014",
        FechaFinal: "Junio 2014",
        Actual: false,
        Funciones: [
          "Mantenimientos preventivo y correctivos enequipos alimenticios",
        ],
      },
      {
        Empresa: "Creative Colors S.A",
        Cargo: "Técnico Jefe de Sección",
        FechaInicial: "Agosto 2012",
        FechaFinal: "Abril 2014",
        Actual: false,
        Funciones: [
          "Operación y mantenimiento de maquinariapara la elaboración de diversos productos cosméticos",
        ],
      },
      {
        Empresa: "Intecplast S.A.",
        Cargo: "Técnico Mantenimiento",
        FechaInicial: "Enero 2012",
        FechaFinal: "Agosto 2012",
        Actual: false,
        Funciones: [
          "Mantenimientos preventivo y correctivos enmáquinas industriales y de suministro crítico",
          "Administración de datos sobre los diferentesequipos",
          "Se logra realizar estructuras para elmejoramiento de la calidad de los productos",
        ],
      },
      // {
      //   Empresa: "",
      //   Cargo: "",
      //   FechaInicial: "",
      //   FechaFinal: "",
      //   Actual: false,
      //   Funciones: [
      //     ""
      //   ],
      // },
      
    ]
  }
}
