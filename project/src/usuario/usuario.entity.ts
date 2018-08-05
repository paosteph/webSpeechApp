import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NivelEntity} from "../nivel/nivel.entity";
import {Practica} from "./practica.entity";
import {Palabra} from "../nivel/palabra.entity";


@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    nick: string;

    @Column({length: 500})
    correo: string;

    @Column('text')
    url_foto: string;

    @Column({length: 30})
    contrasena: string;

    @OneToMany(type => Practica, practica => practica.usuario)
    practicas: Practica[];

    @OneToMany(type => Palabra, palabra => palabra.usuario)
    palabras: Palabra[];

    @Column()
    esAdministrador:boolean;

    @OneToMany(type => NivelEntity,nivel=>nivel.administrador)
    nivelesCreados: NivelEntity[];

}