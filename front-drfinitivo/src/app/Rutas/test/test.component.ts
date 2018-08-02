import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() palabraFrase;
  @Input() subtNivel;

  private titulo;
  private subtResultado;
  private grabando: boolean;
  private finGrabacion: boolean;
  private oculto: boolean;
  private botonReintentar;
  private botonSiguiente;
  //practica
  private loQueDijo;
  private loCorrecto;
  private resultado: boolean;

  constructor() { }

  ngOnInit() {
    this.titulo = "Mi Test";
    this.subtResultado = "Resultado";
    this.subtNivel = "Basico";
    this.grabando = false;
    this.finGrabacion = false;
    this.oculto = false;
    this.palabraFrase = "Probando";
    this.botonReintentar = "Reintentar";
    this.botonSiguiente = "Siguiente palabra";

    //practica
    this.loQueDijo = "Helli";
    this.loCorrecto = "Hellolkdsnflasknf alksnfasknfalfkn adknfaldnflakdnfaksnfak snflakfnlasknflak snfasnfafasf";
    this.resultado = false;
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
