import {Controller, Get, Req, Post, Res, Query, Body} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Frase_Schema} from "./nivel/frase.schema";

@Controller('Usuario')
export class UsuarioController {

    @Post('frase')
    mostrarFrase(@Body(new UsuarioPipe(Frase_Schema)) frase){
        return frase;
    }

}