//defino el controlador de la api 
const TransaccionControll = require('../controllers/transaccion.controller');
//creamos el manejador de rutas express
const express = require('express');
const router = express.Router();
//definimos rutas 

router.post('/generar', TransaccionControll.crearTransaccion);
router.get('/obtener', TransaccionControll.getTodas);
router.get('/flitrarMail', TransaccionControll.filtrarTransaccionesMail);
router.get('/filtraDivisas', TransaccionControll.filtrarTransaccionesDivisas);
module.exports = router;