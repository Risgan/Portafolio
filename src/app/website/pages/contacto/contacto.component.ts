import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [MessageService]
})
export class ContactoComponent {

 
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.form= fb.group({
      nombre: [null, Validators.required],
      email: [null, Validators.required],
      mensaje: [null, Validators.required],
  });
  }

  sendEmail() {
  //   // Aquí puedes agregar la lógica para enviar el mensaje, como una solicitud HTTP a tu servidor o un servicio de envío de correo electrónico.
    console.log(this.form)
  //   this.sgMail
  //   .send(this.msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error:any) => {
  //     console.error(error)
  // })
  this.messageService.add({ severity: 'success', summary: 'Envio de Correo', detail: 'Se ha enviado el correo con exito, pronto me estare comunicando, gracias' });

  this.form.reset()
  }
}
