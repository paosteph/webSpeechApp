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
  // @Input() practicasTotal;
  @Input() practicasExitosas;
  @Input() porcentajeExito;

  private titulo;
  private subtRecord;
  private subtProgreso;
  private botonResumen;
  private idUsuario;
  usuario = {};
  totalPracticas = {};
  practicasMejores = [];
  practicasPeores = [];

  constructor(private cookieService: CookieService, private _httpClient: HttpClient, private _usuarioService:UsuarioService) {
  }

  ngOnInit() {
    // cookie del usuario
    this.idUsuario = this.cookieService.get('cookieId');

    this.titulo = "Mi perfil";
    this.subtRecord = "Records";
    this.subtProgreso = "Progreso";
    this.botonResumen = "Ver resumen prácticas";

    this.obtenerUsuario();
    this.obtenerTotalPracticas();
    this.obtenerTresMejores();
    this.obtenerTresPeores();
  }

  obtenerUsuario(){
    this._usuarioService.obtenerUno(this.idUsuario).subscribe(
      (usuario: Usuario)=>{
            this.usuario = usuario;
            console.log(usuario);
      }
    );
  }

  obtenerTotalPracticas(){
    this._usuarioService.obtenerTotalPracticas(this.idUsuario).subscribe(
      (total: any)=>{this.totalPracticas = total; console.log('Total',this.totalPracticas)}
    );
  }

  obtenerTresMejores(){
    this._usuarioService.obtenerTresMejores(this.idUsuario).subscribe(
      (mejores: any)=>{this.practicasMejores = mejores; console.log('Mejores',this.practicasMejores)}
    );
  }

  obtenerTresPeores(){
    this._usuarioService.obtenerTresPeores(this.idUsuario).subscribe(
      (peores: any)=>{this.practicasPeores = peores; console.log('Peores',this.practicasPeores)}
    );
  }

}
