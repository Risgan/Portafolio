import { Component } from '@angular/core';
import { ArchivoService } from '../../services/archivo.service';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent {


  constructor(
    private archivoService: ArchivoService,
  ) { }


  downloadFile() {
    this.archivoService.getArchivo();
  }

}
