import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eliminar-frase',
  templateUrl: './eliminar-frase.component.html',
  styleUrls: ['./eliminar-frase.component.css']
})
export class EliminarFraseComponent implements OnInit {

  constructor(private httpClient:HttpClient,
              private router:Router) { }

  frases;
  indice=-1;

  ngOnInit() {
    this.httpClient.post("http://localhost:3000/nivel/obtenerFraseNoNivel",{}).subscribe((frases:any)=>{
      this.frases=frases;
    });
  }

  seleccionarFrase(index){
    this.indice=index;
  }

  async buscarFrase(formulario){
    this.indice=-1;
    await this.delay(100);
    const controles = formulario.controls;
    const palabraBusqueda = controles.palabraBusqueda.value;
    const $buscarFrase = this.httpClient.post("http://localhost:3000/nivel/buscarFrase",{palabraBuscada:palabraBusqueda});
    $buscarFrase.subscribe((frases:any)=>{
      this.frases=frases;
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  eliminarNivel(){
    const eliminarFrase = this.httpClient.post("http://localhost:3000/nivel/eliminarFrase",
      {idFrase:this.frases[this.indice].id});
    eliminarFrase.subscribe((mensaje)=>{
      console.log(mensaje);
      this.frases.splice(this.indice,1);
    });
  }

}
