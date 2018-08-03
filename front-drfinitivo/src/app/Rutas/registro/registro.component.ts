import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../../Servicio/usuario.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 botonRegistrase;
  nombref: string = '';
  nickf: string='';
  correof:string='';
  contrasenaf: string = '';
  urlf: string;
  respuesta;
  hide = true;
  constructor(private _httpClient:HttpClient,private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.botonRegistrase = "Registrarse";
  //  const crearUser=this._httpClient.post("http://localhost:3000/Usuario/crear",{nombre:this.nombref,nick:this.nickf,correo:this.correof,contrasena:this.contrasenaf,url_foto:this.urlf})
    }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
crear(){
  this.usuarioService.postCrearUsuario(this.nombref,this.nickf,this.correof,this.contrasenaf,this.urlf)
}
}
