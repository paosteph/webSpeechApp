import {Controller, Get, Post, Res, Body, UseGuards, ReflectMetadata} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Frase_Schema} from "./nivel/frase.schema";
import {JwtService} from "./autentificacion/jwt.service";
import {UsuarioGuard} from "./autentificacion/usuario.guard";

@Controller('Usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {
    constructor(private _jwtService:JwtService){}

    @Post('frase')
    @ReflectMetadata('necesitaValidacion',true)
    mostrarFrase(@Body(new UsuarioPipe(Frase_Schema)) frase){
        return frase;
    }

    @Post('logear')
    @ReflectMetadata('necesitaValidacion',false)
    loguearUsuario(@Body('nickname') nickname,@Body('password') password,@Res() response){
        const credenciales=nickname && password;
        if(credenciales){
            if(nickname=='n'&&password=='p'){
                const parametros={nombre:'cookieSesion',
                    valor:this._jwtService.emitirToken('n')}

                response.cookie(parametros.nombre,parametros.valor);
                response.send("logueado correctamente");
            }else{
                response.status(410).send('credenciales incorrectas');
            }
        }else{
            response.status(403).send('credenciales invalidas')
        }
    }

    @Get('cerrarSesion')
    @ReflectMetadata('necesitaValidacion',false)
    cerrarSesion(@Res() response){

        const parametros={nombre:'cookieSesion',
            valor:''}

        response.cookie(parametros.nombre,parametros.valor);
        response.send("cerro sesion");

    }

}