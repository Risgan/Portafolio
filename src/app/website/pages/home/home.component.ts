import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // const lineElement: any = document.getElementById('moving-line');

    // function animateWave() {
    //   const amplitude = 10; // Altura máxima de la ola
    //   const frequency = 0.1; // Frecuencia de la ola
    //   const speed = 0.1; // Velocidad de la animación

    //   // Calculamos el desplazamiento vertical de la ola usando la función seno
    //   const offsetY = amplitude * Math.sin(Date.now() * frequency * speed);

    //   // Aplicamos la animación al atributo 'transform' de la línea
    //   lineElement.setAttribute('transform', `translate(0, ${offsetY})`);

    //   // Repetimos la animación en el próximo frame de animación
    //   requestAnimationFrame(animateWave);
    // }

    // // Iniciamos la animación
    // animateWave();
  }

}
