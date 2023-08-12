import { Component, OnInit, Renderer2 } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss'],
  providers:[MessageService]
})
export class MasterPageComponent {

}