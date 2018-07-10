import {Routes} from "@angular/router";
import {RutaFAQComponent} from "./ruta-faq/ruta-faq.component";
import {RutaNoEncontradoComponent} from "./ruta-no-encontrado/ruta-no-encontrado.component";
import {RutaPerfilComponent} from "./ruta-perfil/ruta-perfil.component";
import {RutaUsuarioComponent} from "./ruta-usuario/ruta-usuario.component";
import {RutaHomeComponent} from "./ruta-home/ruta-home.component";

export const ARREGLO_RUTAS: Routes = [
  {
    component: RutaHomeComponent,
    path: 'home',
    children: [
      {
        path: 'perfil',
        component: RutaPerfilComponent
      },
      {
        path: 'usuario/:usuarioId/u/:universidadId',
        component: RutaUsuarioComponent
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaFAQComponent,
    path: 'FAQ'
  },
  {
    component: RutaNoEncontradoComponent,
    path: '404'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradoComponent
  }
];
