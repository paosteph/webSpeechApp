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
  private botonRegistrase;

  constructor() { }

  ngOnInit() {
    this.titulo = "Test gratis";
    this.subtResultado = "Resultado";
    this.botonRegistrase = "Registrarse";
    this.grabando = false;
  }

}
