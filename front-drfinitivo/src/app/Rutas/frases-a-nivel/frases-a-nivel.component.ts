import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-frases-a-nivel',
  templateUrl: './frases-a-nivel.component.html',
  styleUrls: ['./frases-a-nivel.component.css']
})
export class FrasesANivelComponent implements OnInit {

  nuevaFrase;
  palabraBusqueda;
  idNivel=1;
  frasesNivel=[];
  frasesOtrasMostradas=[];

  constructor(private httpClient:HttpClient,
              /*private activatedRoute:ActivatedRoute*/) { }

  ngOnInit() {
    /*
    const $obtenerParametros = this.activatedRoute.params;
    $obtenerParametros.subscribe((data:any)=>this.idNivel=data['idNivel']);
    */
    this.cargarFrases();
  }

  cargarFrases(){
    const $obtenerFrasesNivel = this.httpClient.post("http://localhost:3000/nivel/obtenerFrasesNivel",{idNivel:this.idNivel});
    $obtenerFrasesNivel.subscribe((frases:any)=>{
      this.frasesNivel=frases;
      this.frasesNivel.forEach((frase)=>{
        frase.seleccionado=false;
      })});

    const $obtenerFrasesNoNivel = this.httpClient.post("http://localhost:3000/nivel/obtenerFraseNoNivel",{idNivel:this.idNivel});
    $obtenerFrasesNoNivel.subscribe((frases:any)=>{
      this.frasesOtrasMostradas=frases;
      this.frasesOtrasMostradas.forEach((frase)=>{
        frase.seleccionado=false;
      });
    });
  }

  seleccionarFraseNivel(index){
    this.frasesNivel[index].seleccionado = this.frasesNivel[index].seleccionado == false;
    console.log(this.frasesNivel);
  }

  seleccionarFraseOtras(index){
    this.frasesOtrasMostradas[index].seleccionado = this.frasesOtrasMostradas[index].seleccionado == false;
    console.log(this.frasesOtrasMostradas);
  }

  crearFrase(formulario){
    const controles = formulario.controls;
    const texto=controles.nuevaFrase.value;
    const $crearFrase = this.httpClient.post("http://localhost:3000/nivel/crearFrase",{texto:texto,idNivel:this.idNivel});
    $crearFrase.subscribe((mensaje)=>console.log(mensaje));

    this.cargarFrases();
  }

  async anadirCampoSeleccionado(){
    await this.frasesOtrasMostradas.forEach((frase:any)=>{
      if(frase.seleccionado===true){
        const $anadirFrase=this.httpClient.post("http://localhost:3000/nivel/anadirFrase",{idFrase:frase.id,idNivel:this.idNivel});
        $anadirFrase.subscribe((mensaje)=>console.log(mensaje));
        frase.seleccionado=false;
      }
    });

    await this.delay(1000);
    this.cargarFrases();
  }

  async quitarCampoSeleccionado(){
    await this.frasesNivel.forEach((frase:any)=>{
      if(frase.seleccionado===true){
        const $quitarFrase=this.httpClient.post("http://localhost:3000/nivel/quitarFrase",{idFrase:frase.id,idNivel:this.idNivel});
        $quitarFrase.subscribe((mensaje)=>console.log(mensaje));
        frase.seleccionado=false;
      }
    });

    await this.delay(1000);
    this.cargarFrases();
  }

  async buscarFrase(formulario) {
    await this.delay(100);
    const controles = formulario.controls;
    const palabraBusqueda = controles.palabraBusqueda.value;
    const $buscarFrases = this.httpClient.post("http://localhost:3000/nivel/buscarFrase",{palabraBuscada:palabraBusqueda});
    $buscarFrases.subscribe((frases:any)=>{
      this.frasesOtrasMostradas=frases;
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
