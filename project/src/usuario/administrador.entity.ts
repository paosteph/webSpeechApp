import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NivelEntity} from "../nivel/nivel.entity";

@Entity('administrador')
export class Administrador{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    contraseña:string;

    @OneToMany(type => NivelEntity,nivel=>nivel.administrador)
    niveles: NivelEntity[];



}