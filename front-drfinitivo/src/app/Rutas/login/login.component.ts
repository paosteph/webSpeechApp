import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  nombreIngresar;
  tituloLogin;
  constructor(private cookieService: CookieService, private fb: FormBuilder,
              title: Title) {
    title.setTitle('Login');
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  ngOnInit() {
    this.validarUsuario();
    this.nombreIngresar="Ingresar";
    this.tituloLogin="Login";
  }

  validarUsuario(){
    //guardo coookie
    this.cookieService.set( 'usuarioId', "5" ); //cambiar con id servicio
  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
  }


}
