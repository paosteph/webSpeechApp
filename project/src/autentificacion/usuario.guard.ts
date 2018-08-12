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
        const headers=context.getArgs();

        const reflectorNecesitaValidacion= this.reflector
            .get(
                'necesitaValidacion',
                context.getHandler()
            );

        if (reflectorNecesitaValidacion){

            const nombreCookie="cookieSesion";
            const existeCookie=request.cookies[nombreCookie];
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