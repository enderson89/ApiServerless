const Joi = require('@hapi/joi');

const Pelicula = Joi.object().keys({
    titulo: Joi.string().required(),
    id_episodio: Joi.string().required(),
    texto_introductorio: Joi.string().required(),
    director: Joi.string().required(),
    productor: Joi.string().required(),
    fecha_lanzamiento: Joi.string().required(),
    especies: Joi.array().items(String).allow([]).required(),
    naves: Joi.array().items(String).allow([]).required(),
    vehiculos: Joi.array().items(String).allow([]).required(),
    personajes: Joi.array().items(String).allow([]).required(),
    planetas: Joi.array().items(String).allow([]).required(),
    url: Joi.string().required(),
    creado: Joi.string().required(),
    editado: Joi.string().required()
});

module.exports = Pelicula;