import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  esAdmin;

  ngOnInit() {
    this.esAdmin = this.cookieService.get('cookieEsAdmin');
    console.log('esAdmin',this.esAdmin);
  }

}
