import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {withBody} from "@angular/core/testing";
import {Usuario} from "../clases/usuario";

@Injectable()
export class UsuarioService {
  constructor(private http:HttpClient){}

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, " +
      "Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
 postCrearUsuario(nombref,nickf,correof,contyrasenaf,urlf){
  let header= UsuarioService.getCommonHeaders();
  return this.http.post("http://localhost:3000/Usuario/crear",{nombre:nombref,nick:nickf,correo:correof,contrasena:contyrasenaf,url_foto:urlf},{headers: header})

  }

  obtenerUno(idUsuario){
    let header= UsuarioService.getCommonHeaders();
    return this.http.post(
      "http://localhost:3000/Usuario/obtenerUno",
      {idUsuario: idUsuario},
      {headers: header}
      );
  }

  obtenerTotalPracticas(idUsuario){
    let header= UsuarioService.getCommonHeaders();
    return this.http.post(
      "http://localhost:3000/Practica/obtenerTotal",
      {idUsuario: idUsuario},
      {headers: header}
    );
  }

  obtenerTresMejores(idUsuario){
    let header= UsuarioService.getCommonHeaders();
    return this.http.post(
      "http://localhost:3000/Practica/tresMejores",
      {idUsuario: idUsuario},
      {headers: header}
    );
  }

  obtenerTresPeores(idUsuario){
    let header= UsuarioService.getCommonHeaders();
    return this.http.post(
      "http://localhost:3000/Practica/tresPeores",
      {idUsuario: idUsuario},
      {headers: header}
    );
  }

}
