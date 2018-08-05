import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "../../../Servicio/usuario.service";
import {Usuario} from "../../../clases/usuario";
import {Observable} from "rxjs/internal/Observable";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[UsuarioService]
})
export class RegistroComponent implements OnInit {

 botonRegistrase;

  nombre;
  nick;
  correo;
  contrasena;
  url_foto;
contrasena2;
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  datos;
  constructor(private _httpClient:HttpClient,private fb: FormBuilder,
              title: Title,) {
    title.setTitle('Registro');
  }

  ngOnInit() {
    this.botonRegistrase = "Registrarse";
    this.datos = ['true','false']
    }
  cargar(){
    this._httpClient.get<Usuario>('http://localhost:3000/Usuario/mostrar')
      .subscribe((value: Usuario) => {
          console.log(value)
        }
      );

  }
  crear(){

    this._httpClient.post<Usuario>('http://localhost:3000/Usuario/crear', {
      nombre:this.nombre,
      nick: this.nick,
      correo: this.correo,
      contrasena:this.contrasena,
      url_foto: 'https://api.adorable.io/avatars/285/'+this.nombre+'.png',
      esAdministrador:this.verSeleccion
    }, httpOptions).subscribe(value => console.log(value))
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }
  validarcontrasena(){
    if(this.nombre===null||this.correo===null||this.nick===null||this.contrasena){
      if(this.contrasena===this.contrasena2){
        this.crear()
        alert('Se ha registrado correctamente y se te asigno  un avatar que lo podra ver en su perfil')

      }else{alert('verifique las claves ingresadas')}
    }
    else{
      alert('Llene los campos vacios')
    }

  }

}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })

}
