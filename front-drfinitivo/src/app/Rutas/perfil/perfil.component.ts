import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {UsuarioService} from "../../../Servicio/usuario.service";
import {Usuario} from "../../../clases/usuario";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // @Input() nombre;
  // @Input() url_foto;
  // @Input() nick;
  @Input() practicasTotal;
  @Input() practicasExitosas;
  @Input() porcentajeExito;

  private titulo;
  private subtRecord;
  private subtProgreso;
  private botonResumen;
  private idUsuario;
  usuario = {};

  constructor(private cookieService: CookieService, private _httpClient: HttpClient, private _usuarioService:UsuarioService) {
  }

  ngOnInit() {
    // cookie del usuario
    //this.idUsuario = this.cookieService.get('usuarioId');
    this.idUsuario = "5";

    this.titulo = "Mi perfil";
    this.subtRecord = "Records";
    this.subtProgreso = "Progreso";
    this.botonResumen = "Ver resumen prácticas";
    //this.nombre = "Juanito Alimaña";

    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._usuarioService.obtenerUno(this.idUsuario).subscribe(
      (usuario: Usuario)=>{
            this.usuario = usuario;
            console.log(usuario);
            }
    );

  }

}
