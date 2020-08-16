const slshttp = require("serverless-http");
const app = require("express");
const AWS = require('aws-sdk');
const axios = require('axios');
const BASE_URL_SWAPI = 'https://swapi.py4e.com/api';
const bodyParser = require('body-parser');

const PLANETA = process.env.PLANETA;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

// Api serverless endpoints
app.get('/planeta/:nombre', (req, res) => {
  const params = {
    TableName: PLANETA,
    Key: {
      nombre: req.params.nombre,
    }
  }

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'No se puede leer Planeta' });
    }
    if (result.Item) {
      const planeta = result.Item;
      res.json({ planeta });
    } else {
      res.status(404).json({ error: "Planeta no encontrado" });
    }
  });
})

// SWAPI endpoints
app.get('/swapi/personajes', async (req, res) => {
  let uri = '/people';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

app.get('/swapi/peliculas', async (req, res) => {
  let uri = '/films';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

app.get('/swapi/naves', async (req, res) => {
  let uri = '/starships';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

app.get('/swapi/vehiculos', async (req, res) => {
  let uri = '/vehicles';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

app.get('/swapi/especies', async (req, res) => {
  let uri = '/species';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

app.get('/swapi/planetas', async (req, res) => {
  let uri = '/planets';
  let res = await axios.get(BASE_URL_SWAPI + uri);
  let data = res.data;
  res.json({ data });
})

module.exports.apiGet = slshttp(app);
