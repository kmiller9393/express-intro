const express = require('express');
const data = require('./public/mockData.json');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const displayError = (request, response, next) => {
  response.status(404).send("We can't seem to find what you're looking for!");
};

app.use(urlLogger, timeLogger);

app.use(express.static('public'));

app.get('/error', displayError);

app.get('/json', (request, response) => {
  response.status(200).json(data);
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
