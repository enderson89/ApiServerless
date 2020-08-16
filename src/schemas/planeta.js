const Joi = require('@hapi/joi');

const Planeta = Joi.object().keys({
    nombre: Joi.string().required(),
    diametro: Joi.string().required(),
    periodo_rotacion: Joi.string().required(),
    periodo_orbital: Joi.string().required(),
    gravedad: Joi.string().required(),
    poblacion: Joi.string().required(),
    clima: Joi.string().required(),
    terreno: Joi.string().required(),
    superficie_agua: Joi.string().required(),
    residentes: Joi.array().items(String).allow([]).required(),
    peliculas: Joi.array().items(String).allow([]).required(),
    url: Joi.string().required(),
    creado: Joi.string().required(),
    editado: Joi.string().required()
});

module.exports = Planeta;