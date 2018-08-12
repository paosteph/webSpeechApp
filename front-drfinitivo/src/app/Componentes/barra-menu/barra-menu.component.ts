import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  constructor(private cookie:CookieService) { }

  @Input()
  esAdmin=false;

  ngOnInit() {

  }
borrarCookie(){
    this.cookie.deleteAll();
}
}
