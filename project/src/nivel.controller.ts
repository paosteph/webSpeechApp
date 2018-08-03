import {Controller, Get, Post, Body, UseGuards, ReflectMetadata, Query, Res} from "@nestjs/common";
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Admin_Login_Schema} from "./Administrador/administrador.schema";
import {UsuarioGuard} from "./autentificacion/usuario.guard";
import {NivelService} from "./nivel/nivel.service";


@Controller('nivel')
@UseGuards(UsuarioGuard)
export class NivelController{

    constructor(private nivelService:NivelService){}

    @Post('ingresar')
    @ReflectMetadata('necesitaValidacion',true)
    ingresar(@Body(new UsuarioPipe(Admin_Login_Schema))administrador){
        return administrador;
    }

    @Post('crearFrase')
    @ReflectMetadata('necesitaValidacion',false)
    async crearFrase(@Body('texto')texto,@Body('idNivel')idNivel){
        return await this.nivelService.crearFrase(texto,idNivel);
    }

    @Post('anadirFrase')
    @ReflectMetadata('necesitaValidacion',false)
    async anadirFrase(@Body('idFrase')idFrase,@Body('idNivel')idNivel){
        return await this.nivelService.anadirFraseNivel(idFrase,idNivel);
    }

    @ReflectMetadata('necesitaValidacion',false)
    @Post('obtenerFrasesNivel')
    private async obtenerFraseNivel(@Body('idNivel') idNivel){
        return await this.nivelService.obtenerFrasesNivel(idNivel);
    }

    @Post('obtenerFraseNoNivel')
    @ReflectMetadata('necesitaValidacion',false)
    private async obtenerFraseNoNivel(@Body('idNivel')idNivel){
        return await this.nivelService.obtenerFrasesNoNivel(idNivel);
    }

    @Post('quitarFrase')
    @ReflectMetadata('necesitaValidacion',false)
    async quitarFrase(@Body('idFrase')idFrase,@Body('idNivel')idNivel){
        return await this.nivelService.quitarFraseNivel(idFrase,idNivel);
    }
}