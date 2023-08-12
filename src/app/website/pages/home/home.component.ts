import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('typed', { static: true }) typedElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Frontend', 'Backend', 'Databases'],
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1500,
      // startDelay: 1000,
      loop: true
    };

    const typed = new Typed(this.typedElement.nativeElement, options);
  }
}