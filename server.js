const express = require('express');
const app = express();
const server = app.listen(3000,encender);

cl=console.log;

function encender () {
  cl('Servidor encendido');
}

app.use(express.static('public'))