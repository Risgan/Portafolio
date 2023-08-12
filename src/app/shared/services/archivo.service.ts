import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  latexContent!: Blob;
  archivo: string = 'HOJA_DE_VIDA_JOHN_ALVARO_RUEDA_FORERO.pdf';
  url: string = 'assets/latex/HOJA_DE_VIDA_JOHN_ALVARO_RUEDA_FORERO.pdf';

  constructor(
    private http: HttpClient
  ) { 
    this.loadLatexFile()
  }

  getArchivo(){
    saveAs(this.latexContent, this.archivo);
  }

  loadLatexFile() {
    
    this.http.get(this.url, { responseType: 'blob' }).subscribe(
      (content) => {
        this.latexContent = content;
      }
    );
  }
}
