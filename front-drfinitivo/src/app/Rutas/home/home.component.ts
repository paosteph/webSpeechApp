import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private router:Router) { }
  esAdmin;

  ngOnInit() {
    this.esAdmin = this.cookieService.get('cookieEsAdmin');
    console.log('esAdmin',this.esAdmin);
    if(!(this.esAdmin==true||this.esAdmin==false)){
      this.router.navigate(["login"]);
    }
  }

}
