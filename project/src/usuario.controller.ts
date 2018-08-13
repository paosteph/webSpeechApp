import {Controller, Get, Post, Res, Body, UseGuards, ReflectMetadata, Req} from '@nestjs/common';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {Frase_Schema} from "./nivel/frase.schema";
import {JwtService} from "./autentificacion/jwt.service";
import {UsuarioGuard} from "./autentificacion/usuario.guard";
import {UsuarioService} from "./usuario/usuario.service";
import {UsuarioEntity} from "./usuario/usuario.entity";

@Controller('Usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {
    constructor(private _jwtService:JwtService,private usuarioService:UsuarioService){}

    @Post('frases')
    @ReflectMetadata('necesitaValidacion',true)
    mostrarFrase(@Body(new UsuarioPipe(Frase_Schema)) frase){
        return frase;
    }


    @Post('logear')
    @ReflectMetadata('necesitaValidacion',false)
    async loguearUsuario(@Body('correo') correo,@Body('contrasena') contrasena,@Res() response){
        const credenciales=correo && contrasena;
        if(credenciales){
            const usuario =await this.usuarioService.logearUsuario(correo, contrasena);
            response.cookie("cookieSesion",this._jwtService.emitirToken({correo:correo}));
            response.send(usuario);
        }else{
            console.log('no validado validado')
            //response.status(403).send('credenciales invalidas')
        }
    }

    @Get('cerrarSesion')
    @ReflectMetadata('necesitaValidacion',false)
    cerrarSesion(@Res() response){

        const parametros={nombre:'cookieSesion',
            valor:'nada'}

        response.cookie(parametros.nombre,parametros.valor);
        response.send("cerro sesion");

    }

    @Post('crear')
    async crearUno(
        @Body('nombre') nombre, @Body('nick') nick, @Body('correo') correo,
        @Body('contrasena') contrasena, @Body('url_foto') url_foto,@Body('esAdministrador')esAdministrador
    ){
        return this.usuarioService.crearUno(nombre, nick, correo, contrasena, url_foto,esAdministrador);
    }

    @Post()
    async crearUsersFijos() {
        const usuarios = this.usuarioService.crearUser();
        return usuarios;
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const usuarios = await this.usuarioService.findAll();
        return response.send(usuarios);
    }

    @Post('obtenerUno')
    async obtenerUno(@Body('idUsuario') idUsuario){
        return await this.usuarioService.obtenerUno(idUsuario);
    }

    @Post('validarLogin')
    async validarLogin(@Body('correo')correo,@Req()request){
        const nombreCookie="cookieSesion";
        const existeCookie=request.cookies[nombreCookie];
        console.log("estoy validando");
        if (existeCookie){
            return {autorizado:this._jwtService.verificarToken(existeCookie)};
        }else{
            return {autorizado:false};
        }
    }

}