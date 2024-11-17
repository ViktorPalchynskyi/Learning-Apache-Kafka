const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { corsConfig } = require('@config');

const app = express();

app.use(cors(corsConfig));
app.use(bodyParser.json());

module.exports = app;
