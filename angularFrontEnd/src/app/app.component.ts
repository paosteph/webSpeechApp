import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private _router: Router) {

  }

  irAPerfilUsuario() {
    const url = [
      '/home', // segmentos
      'usuario',
      12, // los parametros llegan como texto plano
      'u',
      'epn'
    ];
    this._router.navigate(url);

  }
}
