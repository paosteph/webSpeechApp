import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private  router:Router) { }

  ngOnInit() {

    const esAdmin = this.cookieService.get('cookieEsAdmin');
    console.log('esAdmin',esAdmin);

    if(!esAdmin){
      console.log("no fue autorizado volviendo a menu")
      this.router.navigate(["home","menuP"]);
    }


  }

}
