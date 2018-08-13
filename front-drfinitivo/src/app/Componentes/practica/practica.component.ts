import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() practicaId;
  @Input() textoBase;
  @Input() significado;
  @Input() fraseId;
  @Output() calificacionParcial = new EventEmitter();
  fraseEscrita;
  calificado = false;
  resultado = 0;

  audio;

  constructor(private http: HttpClient){}

  ngOnInit() {
    console.log("fraseid",this.fraseId);
    console.log("textobase",this.textoBase);
    console.log("sig", this.significado);
  }

  calificarFraseUsuario(fraseUsuario){
    const controles = fraseUsuario.controls;
    this.fraseEscrita = controles.frase.value;

    this.calificarFrase(this.fraseEscrita, this.textoBase);

  }

  calificarFrase(fraseEscrita, fraseCorrecta){
    const url = "http://localhost:3000/Practica/calificarFrase";
    const request$ = this.http.post(url,{
      fraseEscrita: fraseEscrita,
      fraseCorrecta: fraseCorrecta
    });
    request$.subscribe(
      (calificacion:any) => {
        this.calificado = true;
        console.log("p parcial",calificacion);
        this.resultado = calificacion;
        // acumulo porcentaje exito

        this.calificacionParcial.emit(calificacion);

        //this.agregarCalificacionParcial(calificacion);

      },
      (error) => {console.log(error)}
    );
  }


}
