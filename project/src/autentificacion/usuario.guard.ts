import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "./jwt.service";

@Injectable()
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

        const reflectorNecesitaValidacion= this.reflector
            .get(
                'necesitaValidacion',
                context.getHandler()
            );

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