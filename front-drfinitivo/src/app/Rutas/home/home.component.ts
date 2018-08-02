import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private cookieIdUsuario;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieIdUsuario = this.cookieService.get('usuarioId');
  }

}
