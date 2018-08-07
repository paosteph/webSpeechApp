import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../clases/usuario";
import {HttpClient} from "@angular/common/http";
import {NivelService} from "../../../Servicio/nivel.service";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
  providers:[NivelService]
})
export class MenuPrincipalComponent implements OnInit {

  url: string;
  listaNiveles=[];
  niveles_listaAMostrar=[];
  constructor(private _http:HttpClient,private nivelServer:NivelService) { }

  ngOnInit() {
    this.nivelServer.getNiveles().subscribe(
      (result: any[]) => {
        this.listaNiveles = result;
        this.niveles_listaAMostrar = this.obtenerListaAMostrar(this.listaNiveles);
        console.log(this.listaNiveles);
     }
    );
    }

  obtenerListaAMostrar(listaNivels: any []): any [] {
    let lista = listaNivels;
    console.log(lista);
    return lista;

  }

}
