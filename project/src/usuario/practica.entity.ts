import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {NivelEntity} from "../nivel/nivel.entity";

@Entity()
export class Practica{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    fecha: Date;

    @Column()
    intento: number;

    @ManyToOne(type => UsuarioEntity, usuario => usuario.practica)
    usuario: UsuarioEntity;

    @ManyToOne(type => NivelEntity, nivel => nivel.practica)
    nivel: NivelEntity;
}