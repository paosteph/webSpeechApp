import {Routes} from "@angular/router";
import {LoginComponent} from "./Rutas/login/login.component";
import {RegistroComponent} from "./Rutas/registro/registro.component";
import {MenuAdminComponent} from "./Rutas/menu-admin/menu-admin.component";
import {NuevoNivelComponent} from "./Rutas/nuevo-nivel/nuevo-nivel.component";
import {FrasesANivelComponent} from "./Rutas/frases-a-nivel/frases-a-nivel.component";
import {EliminarNivelComponent} from "./Rutas/eliminar-nivel/eliminar-nivel.component";
import {MenuPrincipalComponent} from "./Rutas/menu-principal/menu-principal.component";
import {PerfilComponent} from "./Rutas/perfil/perfil.component";
import {TestGratisComponent} from "./Rutas/test-gratis/test-gratis.component";
import {TestComponent} from "./Rutas/test/test.component";
import {AdminComponent} from "./Rutas/admin/admin.component";
import {EliminarFraseComponent} from "./Rutas/eliminar-frase/eliminar-frase.component";
import {HomeComponent} from "./Rutas/home/home.component";
import {SeleccionarNivelComponent} from "./Rutas/seleccionar-nivel/seleccionar-nivel.component";

export const ARREGLO_RUTAS: Routes = [
  {component:LoginComponent,
    path:"login",
  },
  {component:RegistroComponent,
    path:"Registro"},
  {
    component: AdminComponent,
    path: "Admin",
    children: [
      {
        component: MenuAdminComponent,
        path: "menuA"
      },
      {
        component: NuevoNivelComponent,
        path: "nuevoNivel"
      },
      {
        component: FrasesANivelComponent,
        path: "frasesNivel/:idNivel"
      },
      {
        component: EliminarNivelComponent,
        path: "eliminarNivel"
      },
      {
        component: EliminarFraseComponent,
        path: "eliminarFrase"
      },
      {
        component: SeleccionarNivelComponent,
        path: "seleccionarNivel"
      }]
  },

  {component:HomeComponent,
    path:"home",
    children:[
      {
        component: MenuPrincipalComponent,
        path: "menuP"
      },
      {
        component: PerfilComponent,
        path: "perfil"
      },
      {
        component: TestComponent,
        path: "test"
      }
    ]},

  {
    component: TestGratisComponent,
    path: "testGratis"

  },
  {
    redirectTo:"/home/menuP",
    pathMatch:"full",
    path: "**"
  },
  {
    redirectTo:"login",
    pathMatch:"full",
    path: ""
  }

]
