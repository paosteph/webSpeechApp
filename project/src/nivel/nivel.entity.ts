import {Admin, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Practica} from "../usuario/practica.entity";
import {Frase} from "./frase.entity";
import {Palabra} from "./palabra.entity";
import {AdminEntity} from "../usuario/admin.entity";

@Entity('nivel')
export class NivelEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombreNivel: string;

    @OneToMany(type => Practica, practica => practica.nivel)
    practica: Practica[];

    @ManyToMany(type => Frase, frase => frase.nivel)
    frase: Frase[];

    @OneToMany(type => AdminEntity, admin => admin.nivel)
    admin: Admin;
}