const slshttp = require("serverless-http");
const app = require("express");
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const Planeta = require('../schemas/planeta');

const PLANETA = process.env.PLANETA;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.post('/planeta', (req, res) => {
  const data = req.body;

  // Validando campos con Joi Framework
  Joi.validate(data, Planeta, (err, value) => {
    if (err) {
      const errMsg = err.details;
      res.status(400).json({ errMsg });
    }
  });

  const params = {
    TableName: PLANETA,
    Item: {
      data
    },
  };

  dynamoDb.put(params, (error, data) => {
    if (error) {
      res.status(400).json({ error: 'No se puede guardar Planeta' });
    }
    res.json({ data });
  });
})

module.exports.apiPost = slshttp(appPost);
