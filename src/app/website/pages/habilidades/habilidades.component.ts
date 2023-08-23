import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

  frontendSkills = [
    {
      nombre: 'Angular',
      img: './../../../../assets/images/svg/angularjs.svg'
    },
    {
      nombre: '.Net',
      img: './../../../../assets/images/svg/dot-net.svg'
    },
    {
      nombre: 'C#',
      img: './../../../../assets/images/svg/csharp.svg'
    },
    {
      nombre: 'Flutter',
      img: './../../../../assets/images/svg/flutterio.svg'
    },
    {
      nombre: 'Html',
      img: './../../../../assets/images/svg/html5.svg'
    },
    {
      nombre: 'Ionic',
      img: './../../../../assets/images/svg/ionic.svg'
    },
    {
      nombre: 'Vue',
      img: './../../../../assets/images/svg/vuejs.svg'
    },
  ];


  backendSkills = [
    {
      nombre: 'JavaScript',
      img: './../../../../assets/images/svg/javascript.svg'
    },
    {
      nombre: 'C#',
      img: './../../../../assets/images/svg/csharp.svg'
    },
    {
      nombre: 'Node.js',
      img: './../../../../assets/images/svg/nodejs.svg'
    },
    {
      nombre: 'Java',
      img: './../../../../assets/images/svg/java.svg'
    },
    {
      nombre: 'Spring Boot',
      img: './../../../../assets/images/svg/springio.svg'
    },
    {
      nombre: 'Python',
      img: './../../../../assets/images/svg/python.svg'
    },    
    {
      nombre: 'TypeScript',
      img: './../../../../assets/images/svg/typescript.svg'
    },
    {
      nombre: 'Azure Functions',
      img: './../../../../assets/images/svg/microsoft_azure.svg'
    },
    {
      nombre: 'Amazon EventBridge',
      img: './../../../../assets/images/svg/amazonwebservices.svg'
    },
  ];


  databaseSkills = [
    {
      nombre: 'SQL Server',
      img: './../../../../assets/images/svg/sqlserver.svg'
      },
    {
      nombre: 'MySql',
      img: './../../../../assets/images/svg/mysql.svg'
    },
    {
      nombre: 'PostgreSQL',
      img: './../../../../assets/images/svg/postgresql.svg'
    },
    {
      nombre: 'Maria DB',
      img: './../../../../assets/images/svg/mariadb.svg'
    },
    {
      nombre: 'Firebase',
      img: './../../../../assets/images/svg/firebase.svg'
    },
    {
      nombre: 'Amazon RDS',
      img: './../../../../assets/images/svg/amazonwebservices.svg'
    },
    {
      nombre: 'Azure Database',
      img: './../../../../assets/images/svg/microsoft_azure.svg'
    },
    {
      nombre: 'MongoDb',
      img: './../../../../assets/images/svg/mongodb.svg'
    },
  ];

}
