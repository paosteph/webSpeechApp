import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('nivel')
export class NivelEntity{

    @PrimaryGeneratedColumn()
    id: number
}