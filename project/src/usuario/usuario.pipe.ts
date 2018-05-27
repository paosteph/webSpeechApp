import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {Usuario_Registro_Schema} from "./usuario.schema";

@Injectable()
export class UsuarioPipe implements PipeTransform{
    constructor(private readonly _schema ){

    }

    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata
    ){

        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest,
            this._schema
        );

        return valorEnBrutoDelRequest;
    }

}
