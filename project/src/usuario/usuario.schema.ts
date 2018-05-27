import * as Joi from 'joi';

export const Usuario_Registro_Schema = Joi.object().keys({
    nombre: Joi.string().min(1).max(50).required().regex(/^[a-zA-Z\s]+$/),
    nickname: Joi.string().min(1).max(15).required().alphanum(),
    correo: Joi.string().email().required(),
    contrasena: Joi.string().required().min(5).max(15).alphanum(),

});

export const Usuario_Login_Schema = Joi.object().keys({
    usuario: Joi.alternatives().try(
        Joi.string().min(1).max(15).required().alphanum(), //nickname
        Joi.string().email().required(), //correo
    ),
    contrasena: Joi.string().required().min(5).max(15).alphanum(),
});