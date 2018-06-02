import {NivelEntity} from "../nivel/nivel.entity";
import {Column, Entity, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import {PrimaryGeneratedColumn} from "typeorm/browser";
import {UsuarioEntity} from "./usuario.entity";

@Entity()
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    usuario: string;

    @Column('text')
    contrasena: string;

    @ManyToOne(type => NivelEntity, nivel=> nivel.admin)
    nivel: NivelEntity[];

}