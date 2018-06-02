import * as Joi from 'joi';

export const Admin_Login_Schema = Joi.object().keys({
    contrasena: Joi.string().required().min(5).max(15).alphanum(),

    nombre:Joi.string().required().min(5).max(15).alphanum(),
});