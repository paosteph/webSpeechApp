import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() palabraFrase;
  @Input() subtNivel;

  private titulo;
  private subtResultado;
  nivel = "";

  private botonReintentar;
  private botonSiguiente;

  //nivel
  idPractica = 0;
  practicaTodo:any = {};
  frases:any = [];
  frase:any = {};
  contador = 0;
  finPractica = false;
  puntajeFinal;
  calificacionesParciales = [];

  constructor(private http: HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = "Mi Test";
    this.subtResultado = "Resultado";

    this.botonReintentar = "Reintentar";
    this.botonSiguiente = "Siguiente palabras";

    //parametros ruta
    const observableParametrosRutas$ = this._activatedRoute.params;
    observableParametrosRutas$.subscribe(
      (parametros)=>{
        console.log("id nivel",parametros);
        this.idPractica = parametros['id_practica'];
        // frases

      },
      (error)=>{console.log("mal !",error)},
    );

    this.cargarPractica(this.idPractica);

  }


  cargarPractica(practicaID){
    const url = "http://localhost:3000/Practica/obtenerTodo";
    const request$ = this.http.post(url,{
      idPractica: practicaID
    });
     request$.subscribe(
       (practica:any) => {
         this.practicaTodo = practica;
         this.nivel = this.practicaTodo.nivel.nombre;
         this.frases = this.practicaTodo.nivel.frases;
         this.frase = this.frases[this.contador];
         console.log(practica);
         console.log("frases",this.frases);
         console.log("frase", this.frase);
       },
       (error) => {console.log(error)}
     );
  }

  siguienteFrase(){
    this.contador++;
    if(this.contador < this.frases.length){
      this.frase = this.frases[this.contador];
      console.log("sig frase", this.frase);
    }else{
      this.finPractica = true;
      this.puntajeFinal = this.calificacionesParciales.reduce(
        (valorAnterior, valorActual)=>{
          return valorAnterior + valorActual;
        }) / this.calificacionesParciales.length;

      this.calificar(this.puntajeFinal);

    }
  }

  agregarCalificacion(calificacionParcial:any){
    console.log("emitter", calificacionParcial);
    this.calificacionesParciales[this.contador] = calificacionParcial;
    console.log("calificaciones", this.calificacionesParciales);
  }

  calificar(puntaje){

    console.log(puntaje);

    const url = "http://localhost:3000/Practica/agregarPorcentajeExito";
    const request$ = this.http.post(url,{
      idPractica: this.idPractica,
      porcentaje:  puntaje
    });

    request$.subscribe(
      (porcentajeAcumulado:any) => {
        console.log("acumulado",porcentajeAcumulado);
      },
      (error) => {console.log(error)}
    );
  }


}
