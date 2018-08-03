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
  frasesTodas=[{texto:'bad',seleccionado:false},{texto:'Hey arnold, how do you feel today? I wish you are goodHey arnold, how do you feel today? I wish you are good' ,seleccionado:false}];
  idNivel=1;
  frasesNivel=[{texto:'hello',seleccionado:false},{texto:'bye',seleccionado:false}];
  frasesOtrasMostradas=[{texto:'bad',seleccionado:false},{texto:'Hey arnold, how do you feel today? I wish you are goodHey arnold, how do you feel today? I wish you are good' ,seleccionado:false}];

  constructor(private httpClient:HttpClient,
              /*private activatedRoute:ActivatedRoute*/) { }

  ngOnInit() {
    /*
    const $obtenerParametros = this.activatedRoute.params;
    $obtenerParametros.subscribe((data:any)=>this.idNivel=data['idNivel']);
    */
    const $obtenerFrasesNivel = this.httpClient.post("",{idNivel:this.idNivel});
    $obtenerFrasesNivel.subscribe((frases:any)=>{this.frasesNivel=frases;});

    const $obtenerFrasesNoNivel = this.httpClient.post("",{idNivel:this.idNivel});
    $obtenerFrasesNoNivel.subscribe((frases:any)=>{
      this.frasesTodas=frases;
      this.frasesOtrasMostradas=frases;
    });
  }

  seleccionarFrase(frase:any){
    if(frase.seleccionado == false)
      frase.seleccionado=true;
    else
      frase.seleccionado=false;
  }

  crearFrase(formulario){
    const controles = formulario.controls;
    const texto=controles.nuevaFrase.value;
    const $crearFrase = this.httpClient.post("",{texto:texto,idNivel:this.idNivel});
    $crearFrase.subscribe((mensaje)=>console.log(mensaje));
  }

  anadirCampoSeleccionado(){
    this.frasesOtrasMostradas.forEach((frase:any)=>{
      if(frase.seleccionado){
        const $anadirFrase=this.httpClient.post("",{idFrase:frase.id,idNivel:this.idNivel});
        $anadirFrase.subscribe((mensaje)=>console.log(mensaje));
      }
    });
    this.frasesOtrasMostradas.forEach((frase)=>frase.seleccionado=false);
  }

  quitarCampoSeleccionado(){
    this.frasesNivel.forEach((frase:any)=>{
      if(frase.seleccionado){
        const $quitarFrase=this.httpClient.post("",{idFrase:frase.id,idNivel:this.idNivel});
        $quitarFrase.subscribe((mensaje)=>console.log(mensaje));
      }
    });
    this.frasesNivel.forEach((frase)=>frase.seleccionado=false);
  }

  buscarFrase(formulario) {
    const controles = formulario.controls;
    const palabraBusqueda = controles.palabraBusqueda.value;
    console.log("BUSCADO",palabraBusqueda);
    this.frasesOtrasMostradas = this.frasesTodas.map(
      (frase: any) => {
        if(frase.texto.indexOf(palabraBusqueda) > -1)
          return frase
      });
  }
}
