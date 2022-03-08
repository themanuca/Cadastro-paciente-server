const express = require('express');
const Paciente = require('./controllers/paciente.controllers');
const routes = express.Router();

//Listar Pacientes
routes.get('/list/paciente',Paciente.find);
//Rota de envio dos dados
routes.post('/register/paciente',Paciente.create);
//Rota para puxar os dados 
routes.get('/detail/paciente/:_id', Paciente.detail)
//Rota para deletar paciente
routes.delete('/delete/paciente/:_id', Paciente.delete);

module.exports = routes;