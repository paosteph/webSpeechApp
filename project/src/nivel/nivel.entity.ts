import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Practica} from "../usuario/practica.entity";
import {Frase} from "./frase.entity";

@Entity('nivel')
export class NivelEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Practica, practica => practica.nivel)
    practica: Practica[];

    @ManyToMany(type => Frase, frase => frase.nivel)
    frase: Frase[];
}