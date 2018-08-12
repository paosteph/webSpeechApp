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

  private botonReintentar;
  private botonSiguiente;

  //nivel
  idPractica = 0;
  practicaTodo:any;
  frases = [];
  frase = {};
  contador = 0;
  finPractica = false;
  puntajeFinal = 0;
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
        this.cargarPractica(this.idPractica);
      },
      (error)=>{console.log("mal !",error)},
    );

  }


  cargarPractica(practicaID){
    const url = "http:localhost:3000/Practica/obtenerTodo";
    const request$ = this.http.post(url,{
      idPractica: practicaID
    });
     request$.subscribe(
       (practica:any) => {
         this.practicaTodo = practica;
         this.frases = this.practicaTodo.nivel.frases;
         this.frase = this.frases[this.contador];
         console.log(practica);
         console.log(this.frases);
       },
       (error) => {console.log(error)}
     );
  }

  siguienteFrase(){
    if(this.contador < this.frases.length){
      this.contador++;
      this.frase = this.frases[this.contador];
    }else{
      this.finPractica = true;
      this.calificar();

    }
  }

  agregarCalificacion(calificacionParcial:any){
    this.calificacionesParciales[this.contador] = calificacionParcial;
  }

  calificar(){

    this.puntajeFinal = this.calificacionesParciales.reduce(
      (valorAnterior, valorActual)=>{
        return valorAnterior + valorActual;
      });

    const url = "http:localhost:3000/Practica/agregarPorcentajeExito";
    const request$ = this.http.post(url,{
      idPractica: this.idPractica,
      porcentaje:  this.puntajeFinal
    });
    request$.subscribe(
      (porcentajeAcumulado) => {
        console.log(porcentajeAcumulado);
      },
      (error) => {console.log(error)}
    );
  }


}
