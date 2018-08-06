import {Routes} from "@angular/router";
import {LoginComponent} from "./Rutas/login/login.component";
import {RegistroComponent} from "./Rutas/registro/registro.component";

export const ARREGLO_RUTAS: Routes = [
  {component:LoginComponent,
    path:"",
  },{component:RegistroComponent,
  path:"Registro"}
]
