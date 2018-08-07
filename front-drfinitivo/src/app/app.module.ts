import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Rutas/home/home.component';
import { InicioComponent } from './Rutas/inicio/inicio.component';
import { RegistroComponent } from './Rutas/registro/registro.component';
import { MenuPrincipalComponent } from './Rutas/menu-principal/menu-principal.component';
import { TestGratisComponent } from './Rutas/test-gratis/test-gratis.component';
import { PerfilComponent } from './Rutas/perfil/perfil.component';
import { ResumenExitosFracasosComponent } from './Rutas/resumen-exitos-fracasos/resumen-exitos-fracasos.component';
import { TestComponent } from './Rutas/test/test.component';
import { MenuAdminComponent } from './Rutas/menu-admin/menu-admin.component';
import { FrasesANivelComponent } from './Rutas/frases-a-nivel/frases-a-nivel.component';
import { NuevoNivelComponent } from './Rutas/nuevo-nivel/nuevo-nivel.component';
import { EliminarNivelComponent } from './Rutas/eliminar-nivel/eliminar-nivel.component';
import { NuevaFraseComponent } from './Rutas/nueva-frase/nueva-frase.component';
import { BarraMenuComponent } from './Componentes/barra-menu/barra-menu.component';
import { PracticaComponent } from './Componentes/practica/practica.component';
import { ItemMenuComponent } from './Componentes/item-menu/item-menu.component';
import { TituloComponent } from './Componentes/titulo/titulo.component';
import { SubtituloComponent } from './Componentes/subtitulo/subtitulo.component';
import { BotonComponent } from './Componentes/boton/boton.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, MatPaginatorModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './Componentes/footer/footer.component';
import { LoginComponent } from './Rutas/login/login.component';
import {CookieService} from "ngx-cookie-service";
import { FraseComponent } from './Componentes/frase/frase.component';
import {UsuarioService} from "../Servicio/usuario.service";
import {RouterModule} from "@angular/router";
import {ARREGLO_RUTAS} from "./app.routes";
import { AdminComponent } from './Rutas/admin/admin.component';
import { EliminarFraseComponent } from './Rutas/eliminar-frase/eliminar-frase.component';
import {NivelService} from "../Servicio/nivel.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    RegistroComponent,
    MenuPrincipalComponent,
    TestGratisComponent,
    PerfilComponent,
    ResumenExitosFracasosComponent,
    TestComponent,
    MenuAdminComponent,
    FrasesANivelComponent,
    NuevoNivelComponent,
    EliminarNivelComponent,
    NuevaFraseComponent,
    BarraMenuComponent,
    PracticaComponent,
    ItemMenuComponent,
    TituloComponent,
    SubtituloComponent,
    BotonComponent,
    FooterComponent,
    LoginComponent,
    FraseComponent,
    AdminComponent,
    EliminarFraseComponent
  ],
  imports: [
    BrowserModule,MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,
      {
        useHash: true,
      }
    )
  ],
  providers: [CookieService,UsuarioService,NivelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
