import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() practicaId;
  @Input() textoBase;
  fraseEscrita;
  calificado = false;

  audio;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.audio = this.cargarAudioFrase();
  }

  cargarAudioFrase(){

  }

  calificarFraseUsuario(fraseUsuario){
    const controles = fraseUsuario.controls;
    this.fraseEscrita = controles.frase.value;

    this.calificarFrase(this.fraseEscrita, this.textoBase);

  }

  calificarFrase(fraseEscrita, fraseCorrecta){
    const url = "http:localhost:3000/Practica/calificarFrase";
    const request$ = this.http.post(url,{
      fraseEscrita: fraseEscrita,
      fraseCorrecta: fraseCorrecta
    });
    request$.subscribe(
      (calificacion:any) => {
        this.calificado = true;
        console.log(calificacion);
        // acumulo porcentaje exito
        this.agregarCalificacionParcial(calificacion);

      },
      (error) => {console.log(error)}
    );
  }

  agregarCalificacionParcial(calificacionParcial){
    const url = "http:localhost:3000/Practica/agregarPorcentajeExito";
    const request$ = this.http.post(url,{
      idPractica: this.practicaId,
      porcentajeParcial: calificacionParcial
    });
    request$.subscribe(
      (porcentajeAcumulado) => {
        console.log(porcentajeAcumulado);
      },
      (error) => {console.log(error)}
    );
  }


}
