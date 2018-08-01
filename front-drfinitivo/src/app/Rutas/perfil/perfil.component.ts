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
  @Input() practicasTotal;
  @Input() practicasExitosas;
  @Input() porcentajeExito;

  private titulo;
  private subtRecord;
  private subtProgreso;
  private botonResumen;

  constructor() {
  }

  ngOnInit() {
    this.titulo = "Mi perfil";
    this.subtRecord = "Records";
    this.subtProgreso = "Progreso";
    this.botonResumen = "Ver resumen prácticas";
    this.nombre = "Juanito Alimaña";
  }

}
