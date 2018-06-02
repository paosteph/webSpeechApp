import { Controller, Get, Req,Post ,Res,Query} from '@nestjs/common';

@Controller('Usuario')
export class UsuarioController {
 @Get('')
    verUsuario(){

 }
 @Post('AgregarUsuario')
    AgregarUsuario(){

 }

    @Get('verPractica')
    verPractica(){

    }
    @Post('AgregarPractica')
    AgregarPractica(){

    }


}