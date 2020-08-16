const Joi = require('@hapi/joi');

const Especie = Joi.object().keys({
    nombre: Joi.string().required(),
    clasificacion: Joi.string().required(),
    designacion: Joi.string().required(),
    altura_promedio: Joi.string().required(),
    esperanza_vida_promedio: Joi.string().required(),
    color_ojos: Joi.string().required(),
    color_cabello: Joi.string().required(),
    color_piel: Joi.string().required(),
    idioma: Joi.string().required(),
    planeta_natal: Joi.string().required(),
    personas: Joi.array().items(String).allow([]).required(),
    peliculas: Joi.array().items(String).allow([]).required(),
    url: Joi.string().required(),
    creado: Joi.string().required(),
    editado: Joi.string().required()
});

module.exports = Especie;