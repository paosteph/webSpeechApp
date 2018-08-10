import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Practica} from "./practica.entity";
import {Repository} from "typeorm";

@Injectable()
export class PracticaService{
    constructor(
        @InjectRepository(Practica)
        private readonly _practicaRepositorio: Repository<Practica>
    ){}

    async obtenerSuNivelYFrases(idPractica){
        return await this._practicaRepositorio.findOne(idPractica, {
            relations: ['nivel','nivel.frases']
        });
    }

    async obtenerTotalHechasPorUsuario(idUsuario){
        return await this._practicaRepositorio.createQueryBuilder('practica')
            .select("COUNT(practica.id)", "totalPracticas")
            .where("practica.usuarioId = :id", {id: idUsuario})
            .getRawOne()
        // retorna { totalPracticas: # }
    }

    async obtenerTresMejoresPracticas(idUsuario){
        return await this._practicaRepositorio.createQueryBuilder('practica')
            .innerJoinAndSelect("practica.nivel", "nivel")
            .where("practica.usuarioId = :id", {id: idUsuario})
            .orderBy("practica.porcentajeExito", "DESC")
            .take(3)
            .getMany()
    }

    async obtenerTresPeoresPracticas(idUsuario){
        return await this._practicaRepositorio.createQueryBuilder("practica")
            .innerJoinAndSelect("practica.nivel", "nivel")
            .where("practica.usuarioId = :id", {id: idUsuario})
            .orderBy("practica.porcentajeExito", "ASC")
            .take(3)
            .getMany()
    }

    calificarFrase(fraseEscrita:String,fraseCorrecta:String){
        const palabrasCorrectas=fraseCorrecta.split(" ");
        const calificaciones:number[]=palabrasCorrectas.map((palabra)=>{
            if(fraseEscrita.toUpperCase().indexOf(palabra.toUpperCase())!==-1)
                return 1;
            else
                return 0;
        });
        const calificacion= calificaciones.reduce((calificacionAnterior, calificacionActual)=>{
            return calificacionAnterior+calificacionActual})/calificaciones.length;

        return calificacion;
    }

    async agregarPorcentajeExito(idPractica, porcentajeParcial){
        const practica = await this._practicaRepositorio.findOne(idPractica);
        practica.porcentajeExito = practica.porcentajeExito + porcentajeParcial;
        return practica.porcentajeExito;
    }


}