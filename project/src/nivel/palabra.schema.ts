import * as Joi from 'joi';

export const Guardar_Schema = Joi.object().keys({
    palabra:Joi.string().required().min(5).max(15).alphanum(),
    intento:Joi.number().required().min(1),
    correcto:Joi.number().required().min(1),
});