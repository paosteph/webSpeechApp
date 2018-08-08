import {Body, Controller, Post} from "@nestjs/common";
import {PracticaService} from "./usuario/practica.service";
import {Practica} from "./usuario/practica.entity";

@Controller('Practica')
export class PracticaController{
    constructor(
        private readonly _practicaService: PracticaService
    ){}


    @Post('obtenerTotal')
    async obtenerTotal(@Body('idUsuario') idUsuario){
        return await  this._practicaService.obtenerTotalHechasPorUsuario(idUsuario);
    }

    @Post('tresMejores')
    async obtenerTresMejores(@Body('idUsuario') idUsuario){
        return await this._practicaService.obtenerTresMejoresPracticas(idUsuario);
    }

    @Post('tresPeores')
    async obtenerTresPeores(@Body('idUsuario') idUsuario){
        return await this._practicaService.obtenerTresPeoresPracticas(idUsuario);
    }

    @Post('crearPractica')
    async crearUno(
        @Body('fecha') fecha, @Body('porcentajeExito') porcentajeExito, @Body('usuario') usuario,
        @Body('nivel') nivel
    ){
        return this._practicaService.crearUnaPractica(fecha,porcentajeExito,usuario,nivel);
    }
}