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
  //practicas
  private loQueDijo;
  private loCorrecto;
  private resultado: boolean;
  //nivel
  idPractica = 0;
  practicaTodo=[];

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
        this.idPractica = parametros['']; //PONER NOMBRE ID
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
         console.log(practica)
       },
       (error) => {console.log(error)}
     );
  }


}
