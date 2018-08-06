import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  botonMenu;
  private idUsuario;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.botonMenu="Menu";
    // recupera al inicio el valor id del usuario guardado en la cookie
    this.idUsuario = this.cookieService.get('usuarioId');
    console.log('Cookie usuario inicio',this.idUsuario);
  }

}
