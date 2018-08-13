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
    //this.cargarAudioFrase();
    //this.audio = 'http://localhost:3000/src/audio/frase'+this.fraseId+'.wav';
    this.audio = 'http://localhost:3000/audio/obtenerV2/'+this.fraseId;
  }

  cargarAudioFrase(){
    const url = "http://localhost:3000/audio/obtener/"+this.fraseId;
    const request$ = this.http.get(url);
    //   idFrase: this.fraseId
    // });
    request$.subscribe(
      (audio:any) => {
        this.audio = 'http://localhost:3000/'+audio;
        console.log('audio',this.audio);
      },
      (error) => {console.log(error)}
    );
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
        this.resultado = calificacion;
        // acumulo porcentaje exito

        this.calificacionParcial.emit(calificacion);

        //this.agregarCalificacionParcial(calificacion);

      },
      (error) => {console.log(error)}
    );
  }

  // agregarCalificacionParcial(calificacionParcial){
  //   const url = "http:localhost:3000/Practica/agregarPorcentajeExito";
  //   const request$ = this.http.post(url,{
  //     idPractica: this.practicaId,
  //     porcentajeParcial: calificacionParcial
  //   });
  //   request$.subscribe(
  //     (porcentajeAcumulado) => {
  //       console.log(porcentajeAcumulado);
  //     },
  //     (error) => {console.log(error)}
  //   );
  // }


}
