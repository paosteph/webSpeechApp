import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-nuevo-nivel',
  templateUrl: './nuevo-nivel.component.html',
  styleUrls: ['./nuevo-nivel.component.css']
})
export class NuevoNivelComponent implements OnInit {

  constructor(private httpClient:HttpClient,
              private router:Router,
              private coookieService:CookieService) { }

  ngOnInit() {
  }

  crearNivel(formulario){
    const controles = formulario.controls;
    const nombreNivel=controles.nombre.value;
    const descripcionNivel=controles.descripcion.value;

    this.httpClient.post("http://localhost:3000/nivel/crear",
      {nombre:nombreNivel,descripcion:descripcionNivel,idAdministrador:this.coookieService.get("cookieId")
    }).subscribe((mensaje:any)=>{
      console.log(mensaje);
      const idNivel=mensaje.id;
      if(idNivel){
        this.router.navigate(["Admin","frasesNivel",idNivel]);
      }
    });
  }
}
