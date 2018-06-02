import {Controller} from "@nestjs/common";
import {Get, Post} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {Body} from "@nestjs/common/utils/decorators/route-params.decorator";
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Admin_Login_Schema} from "./Administrador/administrador.schema";
import {Admin} from "typeorm";

@Controller('nivel')
export class NivelController{
    constructor(){

    }
    @Post('ingresar')
    ingresar(@Body(new UsuarioPipe(Admin_Login_Schema))administrador){
        return administrador;
    }


}