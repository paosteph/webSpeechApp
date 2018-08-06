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

  private botonReintentar;
  private botonSiguiente;
  //practicas
  private loQueDijo;
  private loCorrecto;
  private resultado: boolean;

  constructor() { }

  ngOnInit() {
    this.titulo = "Mi Test";
    this.subtResultado = "Resultado";
    this.subtNivel = "Basico";

    this.palabraFrase = "Probando";
    this.botonReintentar = "Reintentar";
    this.botonSiguiente = "Siguiente palabras";

    //practicas
    this.loQueDijo = "Helli";
    this.loCorrecto = "Hellolkdsnflasknf alksnfasknfalfkn adknfaldnflakdnfaksnfak snflakfnlasknflak snfasnfafasf";
    this.resultado = false;
  }



}
