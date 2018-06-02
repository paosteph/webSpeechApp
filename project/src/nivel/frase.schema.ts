import * as Joi from 'joi';

export const Frase_Schema = Joi.object().keys({
    texto: Joi.string().required().min(2).max(200),
});