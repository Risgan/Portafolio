import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContribucionService {

  constructor() { }

  getPublicaciones() {
    return [
      {
        Titulo: 'Development of Smartband to Monitor from Home the Vital Signs for Patients with SARS COV 2 ' +
          'Through a Mobile Application from the Central Military Hospital (HOMIL) Bogota 2020',
        Abstrac: 'After the arrival of SARS COV2 (COVID 19) many biomedical devices have been innovated to mitigate ' +
          'the impact of the pandemic. Despite this, none have been developed to monitor patients with mild symptoms or ' +
          'the asymptomatic from their homes, forcing many hospitals worldwide to send these patients home with poor ' +
          'surveillance measures. The main objective of this project is to monitor from the HOMIL the vital signs of COVID ' +
          '19 patients, who are currently isolated in their homes. For this purpose, a biomedical device in the form of a ' +
          'lowcost smartband has been developed. It is linked to a mobile application connected to a database where heart ' +
          'rate, oxygen saturation, and temperature parameters are sent in real time. The development was proposed in phases, ' +
          'which involve physical design, data acquisition and processing, and subsequent trial at the HOMIL. The smartband ' +
          'design and the mobile application has been developed, wireless communication between sensors has been achieved. ' +
          'Furthermore, the plan is to provide the HOMIL with the capability of initiating emergency protocols. The use of ' +
          'the smartband will be encouraged in patients who have tested positive for COVID 19 through PCR and will be taken ' +
          'off once they test negative.',
        ISBN: '978-1-7281-7388-7',
        Publisher: 'IEEE',
        Year: '2020',
        Url: 'https://ieeexplore.ieee.org/document/9342962',
        Doi: '10.1109/GHTC46280.2020',
        Published: '2020 IEEE Global Humanitarian Technology Conference (GHTC)',
        FechaConferencia: '29 October 2020 - 01 November 2020',
        Biburl: 'https://dblp.org/rec/conf/ghtc/2020.bib',
        INSPEC: '20350421'
      },
    ]
  }

  getReconocimientos(){
    return[
      {
        Nombre:'NASA HUMAN EXPLORATION ROVER CHALLENGE 2020 STEAM',
        Fecha:'Agosto de 2020',
        InstitucionOtorga:'National Aeronautics and Space Administration (NASA)',
        Ambito: 'Internacional'
      }
    ]
  }
}