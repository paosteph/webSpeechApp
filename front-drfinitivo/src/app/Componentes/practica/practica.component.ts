import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {

  @Input() resultado: boolean;
  @Input() loQueDijo;
  @Input() loCorrecto;

  private grabando: boolean;
  private finGrabacion: boolean;
  private oculto: boolean;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.grabando = false;
    this.finGrabacion = false;
    this.oculto = false;

    this.consultaTextToSpeech();
  }

  empezarGrabacion(){
    this.grabando = true;
    this.finGrabacion = false;
  }

  finalizarGrabacion(){
    this.finGrabacion = true;
    this.grabando = false;
    this.oculto = true;
  }

  consultaTextToSpeech(){
    const url = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize";
    const body = {
      "text":"bye world"
    };
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic MmVlYTY3M2MtODY4NS00ZDQyLWIzOTQtZmMxNTVhODNjMGQ0OlBFajMwYVJOM3JoUg==',
        'Accept': 'audio/wav'
      })
    };
    // let headers = new HttpHeaders();
    // headers.append('Content-Type',  'application/json' );
    // headers.append('Authorization','Basic MmVlYTY3M2MtODY4NS00ZDQyLWIzOTQtZmMxNTVhODNjMGQ0OlBFajMwYVJOM3JoUg==');
    // headers.append('Accept', 'audio/wav');

    const request$ = this.http.post(url, body, headers);
    request$.subscribe(
      (audio:any)=>{
        console.log("Audio", audio);
      },
      (error)=>{
        console.log("Error :(", error);
      }
    );
  }

}
