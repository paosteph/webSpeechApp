import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Practica} from "../usuario/practica.entity";
import {Frase} from "./frase.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('nivel')
export class NivelEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(type => Practica, practica => practica.nivel)
    practicas: Practica[];

    @ManyToMany(type => Frase, frase => frase.nivel)
    frases: Frase[];

    @ManyToOne(type=>UsuarioEntity,usuario=>usuario.nivelesCreados)
    administrador: UsuarioEntity;
}