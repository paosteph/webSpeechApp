import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {Usuario} from "../../../clases/usuario";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  nombreIngresar;
  tituloLogin;
  correo;
  contrasena;
  botonRegistro;
  constructor(private cookieService: CookieService,private _http:HttpClient, private fb: FormBuilder,
              title: Title) {
    title.setTitle('Login');
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)]) ],
    });
  }

  ngOnInit() {
    this.validarUsuario();
    this.nombreIngresar="Ingresar";
    this.tituloLogin="Login";
    this.botonRegistro = "Registrarse";
  }

  validarUsuario(){
    //guardo coookie
    this.cookieService.set( 'usuarioId', "5" );
  }

  logeo(){

    this._http.post<Usuario>('http://localhost:3000/Usuario/logear', {
     correo: this.correo,
     contrasena:this.contrasena,
    }, httpOptions).subscribe( (usuario:any)=> {
      console.log(usuario);
      this.cookieService.set( 'cookieId',usuario.id );
      this.cookieService.set('cookieEsAdmin',usuario.esAdministrador);
    })


  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
  }



}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })

}
