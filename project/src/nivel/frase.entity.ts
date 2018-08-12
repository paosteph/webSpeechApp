import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {NivelEntity} from "./nivel.entity";

@Entity()
export class Frase{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    texto: string;

    @Column('text')
    significado: string;

    @Column('text')
    ruta: string;

    @ManyToMany(type => NivelEntity, nivel => nivel.frases)
    @JoinTable()
    nivel: NivelEntity[];
}