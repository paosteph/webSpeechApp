import {Controller, Get, Post, Body} from "@nestjs/common";
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Admin_Login_Schema} from "./Administrador/administrador.schema";


@Controller('nivel')
export class NivelController{

    @Post('ingresar')
    ingresar(@Body(new UsuarioPipe(Admin_Login_Schema))administrador){
        return administrador;
    }


}