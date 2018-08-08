import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seleccionar-nivel',
  templateUrl: './seleccionar-nivel.component.html',
  styleUrls: ['./seleccionar-nivel.component.css']
})
export class SeleccionarNivelComponent implements OnInit {

  constructor(private httpClient:HttpClient,
              private router:Router) { }

  niveles;

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/nivel/listarTodosNiveles").subscribe((niveles:any)=>{
      this.niveles=niveles;
    });
  }

  seleccionarNivel(index){
    this.router.navigate(["Admin","frasesNivel",this.niveles[index].id]);
  }

  async buscarNivel(formulario){
    await this.delay(100);
    const controles = formulario.controls;
    const palabraBusqueda = controles.palabraBusqueda.value;
    const $buscarNivel = this.httpClient.post("http://localhost:3000/nivel/buscarNivel",{palabraBuscada:palabraBusqueda});
    $buscarNivel.subscribe((niveles:any)=>{
      this.niveles=niveles;
      console.log(niveles);
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
