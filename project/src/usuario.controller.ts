import {Controller, Get, Req, Post, Res, Query, Body} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Frase_Schema} from "./nivel/frase.schema";
import {JwtService} from "./autentificacion/jwt.service";

@Controller('Usuario')
export class UsuarioController {
    constructor(private _jwtService:JwtService){}

    @Post('frase')
    mostrarFrase(@Body(new UsuarioPipe(Frase_Schema)) frase){
        return frase;
    }

    @Post()
    loguearUsuario(@Body('nickname') nickname,@Body('password') password,@Res() response){
        const credenciales=nickname && password;
        if(credenciales){
            if(nickname=='n'&&password=='p'){
                response.cookie('cookieSesion',);
                response.send("logueado correctamente",this._jwtService.emitirToken('n'));
            }else{
                response.status(410).send('credenciales incorrectas');
            }
        }else{
            response.status(403).send('credenciales invalidas')
        }
    }
}