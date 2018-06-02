import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Practica} from "../usuario/practica.entity";
import {Frase} from "./frase.entity";
import {Administrador} from "../Administrador/administrador.entity";

@Entity('nivel')
export class NivelEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(type => Practica, practica => practica.nivel)
    practica: Practica[];

    @ManyToMany(type => Frase, frase => frase.nivel)
    frase: Frase[];

    @ManyToOne(type=>Administrador, administrador=>administrador.niveles)
    administrador: Administrador;
}