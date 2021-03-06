const Joi = require('@hapi/joi');

const Vehiculo = Joi.object().keys({
    nombre: Joi.string().required(),
    modelo: Joi.string().required(),
    clase_vehiculo: Joi.string().required(),
    fabricante: Joi.string().required(),
    longitud: Joi.string().required(),
    costo_creditos: Joi.string().required(),
    numero_tripulantes: Joi.string().required(),
    numero_pasajeros: Joi.string().required(),
    maxima_velocidad_atmosfera: Joi.string().required(),
    capacidad_carga: Joi.string().required(),
    maxima_duracion_consumibles: Joi.string().required(),
    peliculas: Joi.array().items(String).allow([]).required(),
    pilotos: Joi.array().items(String).allow([]).required(),
    url: Joi.string().required(),
    creado: Joi.string().required(),
    editado: Joi.string().required()
});

module.exports = Vehiculo;