import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioController} from "./usuario.controller";
import {NivelController} from "./nivel.controller";
import {JwtService} from "./autentificacion/jwt.service";


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
  }),],

  controllers: [AppController,NivelController,UsuarioController],
  providers: [AppService,JwtService],
})
export class AppModule {}
