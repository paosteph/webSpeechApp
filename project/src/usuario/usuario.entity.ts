import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";


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

    @Column({length: 500})
    contrasena: string;



}