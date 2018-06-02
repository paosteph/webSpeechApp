import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity()
export class Palabra{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    palabra: string;

    @Column("int")
    intento: number;

    @Column("int")
    correcto: number;

    @ManyToOne(type => UsuarioEntity, usuario=> usuario.palabra)
    usuario: UsuarioEntity;


}