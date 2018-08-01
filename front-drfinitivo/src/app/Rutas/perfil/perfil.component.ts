import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  @Input() nombre;
  @Input() url_foto;
  @Input() nick;

  private titulo;

  constructor() {
  }

  ngOnInit() {
    this.titulo = "Mi perfil";
    this.nombre = "Juanito Alimaña";
  }

}
