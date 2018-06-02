import * as Joi from 'joi';

export const Ingreso_Practica_Schema = Joi.object().keys({
    porcentaje_exito: Joi.string().required().min(1).max(100),
    fecha : Joi.date(),
});


