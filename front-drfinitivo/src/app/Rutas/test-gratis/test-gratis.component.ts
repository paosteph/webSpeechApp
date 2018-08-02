import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-gratis',
  templateUrl: './test-gratis.component.html',
  styleUrls: ['./test-gratis.component.css']
})
export class TestGratisComponent implements OnInit {

  private titulo;
  private subtResultado;
  private grabando: boolean;
  private finGrabacion: boolean;
  private oculto: boolean;
  private botonRegistrase;

  constructor() { }

  ngOnInit() {
    this.titulo = "Test gratis";
    this.subtResultado = "Resultado";
    this.botonRegistrase = "Registrarse";
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
    this.oculto = true;
    this.grabando = false;
  }

}
