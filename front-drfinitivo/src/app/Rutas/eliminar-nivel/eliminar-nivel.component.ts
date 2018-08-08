import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eliminar-nivel',
  templateUrl: './eliminar-nivel.component.html',
  styleUrls: ['./eliminar-nivel.component.css']
})
export class EliminarNivelComponent implements OnInit {

  constructor(private httpClient:HttpClient,
              private router:Router) { }

  niveles;
  index=-1;
  ngOnInit() {
    this.httpClient.get("http://localhost:3000/nivel/listarTodosNiveles").subscribe((niveles:any)=>{
      this.niveles=niveles;
    });
  }
  seleccionarNivel(index){
    this.index=index;
  }

  async buscarNivel(formulario){
    await this.delay(100);
    const controles = formulario.controls;
    const palabraBusqueda = controles.palabraBusqueda.value;
    const $buscarNivel = this.httpClient.post("http://localhost:3000/nivel/buscarNivel",{palabraBuscada:palabraBusqueda});
    $buscarNivel.subscribe((niveles:any)=>{
      this.niveles=niveles;
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  eliminarNivel(id){
    const eliminarNivel = this.httpClient.post("http://localhost:3000/nivel/eliminarNivel",
      {idNivel:this.niveles[this.index].id});
    eliminarNivel.subscribe((mensaje)=>{
      console.log(mensaje);
      this.niveles.splice(this.index,1);
    });
  }
}
