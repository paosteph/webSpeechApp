import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {NivelEntity} from "../nivel/nivel.entity";

@Entity()
export class Practica{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    fecha: Date;

    @Column("double")
    porcentajeExito: number;

    @ManyToOne(type => UsuarioEntity, usuario => usuario.practicas)
    usuario: UsuarioEntity;

    @ManyToOne(type => NivelEntity, nivel => nivel.practicas)
    nivel: NivelEntity;
}