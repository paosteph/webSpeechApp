import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../clases/usuario";
import {HttpClient} from "@angular/common/http";
import {NivelService} from "../../../Servicio/nivel.service";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent implements OnInit {
  niveles;

  constructor(private _http:HttpClient) { }
nombreNivel='Comenzar'
  ngOnInit() {
    this._http.get("http://localhost:3000/nivel/listarTodosNiveles").subscribe((niveles:any[])=>{
      this.niveles=niveles;
    });
    }



}
