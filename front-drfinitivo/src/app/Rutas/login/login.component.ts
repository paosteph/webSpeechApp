import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private nombreBoton="";
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.validarUsuario();
  }

  validarUsuario(){
    //guardo coookie
    this.cookieService.set( 'usuarioId', "5" ); //cambiar con id servicio
  }

}
