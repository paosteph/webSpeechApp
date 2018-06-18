import {Injectable} from "@nestjs/common";

const jwtPaquete:any = require('jsonwebtoken')

@Injectable()
export class JwtService {
    // no permite modificar el jwttoken
    private readonly jwt = jwtPaquete;
    private readonly secreto = 'el secreto es secreto :v';
    private readonly opciones = { expiresIn: '180s'};

    emitirToken(payload:any){
        return this.jwt
                .sign(payload,
                this.secreto,
                this.opciones
            );
    }

    verificarToken(token:string):boolean{
        //forma sincrónica
        try{
            return this.jwt.verify(token, this.secreto);
        }catch (e) {
            return false
        }

    }

    verificarTokenAsync(token:string,callback){
        //forma async
        this.jwt.verify(token,this.secreto,callback)
    }

}