import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioController} from "./usuario.controller";
import {NivelController} from "./nivel.controller";
import {JwtService} from "./autentificacion/jwt.service"
import {UsuarioEntity} from "./usuario/usuario.entity";
import {NivelEntity} from "./nivel/nivel.entity";
import {Frase} from "./nivel/frase.entity";
import {AzureController} from "./azure/azure.controller";
import {NivelService} from "./nivel/nivel.service";
import {UsuarioService} from "./usuario/usuario.service";
import {Practica} from "./usuario/practica.entity";
import {PracticaService} from "./usuario/practica.service";
import {PracticaController} from "./practica.controller";
import {AudioController} from "./audio/audio.controller";


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'webspeech',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    }), TypeOrmModule.forFeature([UsuarioEntity, NivelEntity, Frase, Practica])],

    controllers: [AppController, NivelController, UsuarioController, AzureController, PracticaController,AudioController],
    providers: [AppService, JwtService, NivelService, UsuarioService, PracticaService],
})
export class AppModule {}