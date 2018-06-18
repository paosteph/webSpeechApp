import {Controller, Get, Post, Body, UseGuards, ReflectMetadata} from "@nestjs/common";
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Admin_Login_Schema} from "./Administrador/administrador.schema";
import {UsuarioGuard} from "./autentificacion/usuario.guard";


@Controller('nivel')
@UseGuards(UsuarioGuard)
export class NivelController{

    @Post('ingresar')
    @ReflectMetadata('necesitaValidacion',true)
    ingresar(@Body(new UsuarioPipe(Admin_Login_Schema))administrador){
        return administrador;
    }


}