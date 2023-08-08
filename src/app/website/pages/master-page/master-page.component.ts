import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {

  colors: ColorPalette = {
    // [key: string]:{
      malibu: {
        50: '#eef8ff',
        100: '#daefff',
        200: '#bde4ff',
        300: '#90d3ff',
        400: '#6cc1ff',
        500: '#359bfc',
        600: '#1f7cf1',
        700: '#1765de',
        800: '#1952b4',
        900: '#1a478e',
        950: '#152c56'
      },
      mountain: {
        50: '#ecfdf3',
        100: '#d1fae1',
        200: '#a7f3c9',
        300: '#6ee7ac',
        400: '#34d38b',
        500: '#0fa968',
        600: '#05965c',
        700: '#04784c',
        800: '#065f3e',
        900: '#064e34',
        950: '#022c1e'
      },
      pink: {
        50: '#fdf3f4',
        100: '#fbe8eb',
        200: '#f6d5da',
        300: '#ea9daa',
        400: '#e58799',
        500: '#d75c77',
        600: '#c13d60',
        700: '#a22e4f',
        800: '#882947',
        900: '#752642',
        950: '#411020'
      },
      wedgewood: {
        50: '#f2f9f9',
        100: '#ddeff0',
        200: '#bfe0e2',
        300: '#92cace',
        400: '#5faab1',
        500: '#438e96',
        600: '#3b757f',
        700: '#356169',
        800: '#325158',
        900: '#2d464c',
        950: '#1a2c32'
      },
      waikawa: {
        50: '#f5f6fa',
        100: '#eaebf4',
        200: '#d0d4e7',
        300: '#a6b0d3',
        400: '#7686ba',
        500: '#6374ae',
        600: '#414f88',
        700: '#36406e',
        800: '#30395c',
        900: '#2c324e',
        950: '#1d2034'
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a'
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712'
      }
    // }
   
  };

  colorIndex = 0;
  colorSelect = 'malibu';

  constructor(
    private renderer: Renderer2
    ) {

    }
  async ngOnInit() {
    this.cambiarTono();
  }

  async cambiarTono() {
    let selectedColors = this.colors[this.colorSelect];

    document.documentElement.style.setProperty('--color-50', selectedColors[50]);
    document.documentElement.style.setProperty('--color-100', selectedColors[100]);
    document.documentElement.style.setProperty('--color-200', selectedColors[200]);
    document.documentElement.style.setProperty('--color-300', selectedColors[300]);
    document.documentElement.style.setProperty('--color-400', selectedColors[400]);
    document.documentElement.style.setProperty('--color-500', selectedColors[500]);
    document.documentElement.style.setProperty('--color-600', selectedColors[600]);
    document.documentElement.style.setProperty('--color-700', selectedColors[700]);
    document.documentElement.style.setProperty('--color-800', selectedColors[800]);
    document.documentElement.style.setProperty('--color-900', selectedColors[900]);
    document.documentElement.style.setProperty('--color-950', selectedColors[950]);
  }
  
  async cambiarColor() {
    // console.log(this.colors, this.colors.malibu[100]);
    // console.log(document.documentElement);
    this.colorIndex = (this.colorIndex + 1) % Object.keys(this.colors).length;

    this.colorSelect = Object.keys(this.colors)[this.colorIndex];
    console.log(this.colorSelect);
    
    // const color100Value = getComputedStyle(document.documentElement).getPropertyValue('--color-100');
    
    // window.getComputedStyle(document.documentElement).getPropertyValue('--color-100');
    
   
    
    await this.cambiarTono();
    window.getComputedStyle(document.documentElement).getPropertyValue('--color-100');

    const color100Value = getComputedStyle(document.documentElement).getPropertyValue('--color-100');
    // getComputedStyle(document.documentElement).set
    console.log('--color-100:', color100Value);
    
  }
}


interface ColorPalette {
  [key: string]: {
    [key: string]: string;
  };
}