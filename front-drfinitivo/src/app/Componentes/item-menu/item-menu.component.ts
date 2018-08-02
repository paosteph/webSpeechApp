import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  constructor() { }
  private botonIngresar;
  private titulo;

  ngOnInit() {
    this.botonIngresar = "Comenzar";
    this.titulo="Nivel";
  }

}
