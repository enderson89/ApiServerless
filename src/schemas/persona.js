const Joi = require('@hapi/joi');

const Persona = Joi.object().keys({
    nombre: Joi.string().required(),
    anho_nacimiento: Joi.string().required(),
    color_ojos: Joi.string().required(),
    genero: Joi.string().required(),
    color_cabello: Joi.string().required(),
    altura: Joi.string().required(),
    masa: Joi.string().required(),
    color_piel: Joi.string().required(),
    planeta_natal: Joi.string().required(),
    peliculas: Joi.array().items(String).allow([]).required(),
    especies: Joi.array().items(String).allow([]).required(),
    naves: Joi.array().items(String).allow([]).required(),
    vehiculos: Joi.array().items(String).allow([]).required(),
    url: Joi.string().required(),
    creado: Joi.string().required(),
    editado: Joi.string().required()
});

module.exports = Persona;