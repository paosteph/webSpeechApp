import {Body, Controller, Post} from "@nestjs/common";
import {PracticaService} from "./usuario/practica.service";
import {Practica} from "./usuario/practica.entity";

@Controller('Practica')
export class PracticaController{
    constructor(
        private readonly _practicaService: PracticaService
    ){}

    @Post('obtenerTodo')
    async obtenerTodo(@Body('idPractica') idPractica){
        return await this._practicaService.obtenerSuNivelYFrases(idPractica);
    }

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

    @Post('calificarFrase')
    calificarFrase(@Body('fraseEscrita') fraseEscrita, @Body('fraseCorrecta') fraseCorrecta){
        return this._practicaService.calificarFrase(fraseEscrita, fraseCorrecta);
    }

    @Post('agregarPorcentajeExito')
    async agregarPorcentajeExito(@Body('idPractica') idPractica, @Body('porcentajeParcial') porcentajeParcial){
        return await this._practicaService.agregarPorcentajeExito(idPractica, porcentajeParcial);
    }


}