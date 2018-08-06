import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() resultado: boolean;
  @Input() loQueDijo;
  @Input() loCorrecto;

  private grabando: boolean;
  private finGrabacion: boolean;
  private oculto: boolean;


  ngOnInit() {
    this.grabando = false;
    this.finGrabacion = false;
    this.oculto = false;
  }

  empezarGrabacion(){
    this.grabando = true;
    this.finGrabacion = false;
  }

  finalizarGrabacion(){
    this.finGrabacion = true;
    this.grabando = false;
    this.oculto = true;
  }

}
