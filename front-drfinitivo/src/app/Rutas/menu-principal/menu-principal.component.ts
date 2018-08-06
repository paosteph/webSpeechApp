import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../clases/usuario";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  nivel;

  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this.cargar();
  }

  cargar(){
    const consultarPeliPedido=this._http.get("localhost:3000/nivel/listarTodosNiveles");
    consultarPeliPedido.subscribe((nivel:any)=>this.nivel=nivel);
    console.log(this.nivel);

  }





}
