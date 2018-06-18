import {CanActivate, ExecutionContext} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "./jwt.service";

export class UsuarioGuard implements CanActivate{
    //recibir reflector
    constructor(
        private  reflector:Reflector,private jwtService:JwtService
    ){}

    canActivate(
        context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request= context.switchToHttp().getRequest();


        console.log('Request', request);
        console.log('cab',request.headers);

        // obtengo reflector
        const reflectorNombreDato= this.reflector
            .get(
                'nombreDato',
                context.getHandler()
            );

        const reflectorNecesitaValidacion= this.reflector
            .get(
                'necesitaValidacion',
                context.getHandler()
            );
        console.log('reflectorNombreDato',
            reflectorNombreDato);

        console.log('reflectorNombreDato',
            reflectorNombreDato);


        if (reflectorNecesitaValidacion){

            const existeCookie=request.cookie["cookieSesion"];
            if (existeCookie){
                return this.jwtService.verificarToken(existeCookie);
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
}