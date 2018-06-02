import {HttpException, HttpStatus} from "@nestjs/common";

export class NoAutorizadoException extends HttpException {
    constructor(private _mensaje,
                private _detalle,
                private _nivelError) {

        super(
            {
                mensaje: _mensaje,
                detalle: _detalle,
                nivelError: _nivelError,
                status: HttpStatus.UNAUTHORIZED
            }, // Mensaje u Objeto
            HttpStatus.UNAUTHORIZED // StatusCode
        );
    }
}