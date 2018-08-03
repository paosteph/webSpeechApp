import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  constructor() { }
private botonMenu;
  private menuInicio;
  ngOnInit() {
    this.botonMenu="Menu";
    this.menuInicio="Menu de Practicas";
  }

}
