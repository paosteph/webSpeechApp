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



}