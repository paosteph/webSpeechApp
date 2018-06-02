import * as Joi from 'joi';

export const Nivel_Esquema = Joi.object().keys({
    nombre: Joi.string().min(1).max(30).required().regex(/^[a-zA-Z\s]+$/),

});