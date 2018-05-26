import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {NivelEntity} from "./nivel.entity";

@Entity()
export class Frase{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    texto: string;

    @ManyToMany(type => NivelEntity, nivel => nivel.frase)
    @JoinTable()
    nivel: NivelEntity[];
}