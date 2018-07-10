import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ARREGLO_RUTAS} from "./app.routes";
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaPerfilComponent } from './ruta-perfil/ruta-perfil.component';
import { RutaNoEncontradoComponent } from './ruta-no-encontrado/ruta-no-encontrado.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
import { RutaFAQComponent } from './ruta-faq/ruta-faq.component';
@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaPerfilComponent,
    RutaNoEncontradoComponent,
    RutaUsuarioComponent,
    RutaFAQComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,
      {
        useHash: true
      }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
