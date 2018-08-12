import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../clases/usuario";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {CookieService} from "ngx-cookie-service";
import {practica} from "../../../clases/practica";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent implements OnInit {
  niveles;
  fecha;
  nivel;
  usuario;
  recuperado=2;
  practicas;
  constructor(private _http:HttpClient,private cookieService: CookieService,private router:Router) { }

  ngOnInit() {
    this._http.get("http://localhost:3000/nivel/listarTodosNiveles").subscribe((niveles:any[])=>{
      this.niveles=niveles;

    });

    this.usuario=this.cookieService.get( 'cookieId');
    console.log(this.usuario);
  }

  crearPractica(idnivel){
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString();
    let mes = (fechaActual.getMonth() + 1).toString();
    let anio = fechaActual.getFullYear().toString();
    this.fecha = anio + "/" + mes + "/" + dia;


    this._http.post("http://localhost:3000/Practica/crearPractica",
      {fecha:this.fecha,porcentajeExito:0,usuario:this.cookieService.get("cookieId"),nivel:idnivel
      }).subscribe((mensaje:any)=>{
      this.practicas=mensaje;
      this.recuperado=this.practicas.id;
    },(error)=>console.log(error));

  }


}

