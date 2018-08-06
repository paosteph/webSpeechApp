import {Routes} from "@angular/router";
import {BotonazoComponent} from "./botonazo/botonazo.component";

export const ARREGLO_RUTAS: Routes = [
  {component:BotonazoComponent,
    path:"practica/:idUsuario/:idNivel/:textoFrase",
  },
];
