//defino el controlador de la api 
const PsjControl = require('../controllers/pasaje.controller');
//creamos el manejador de rutas express
const express = require('express');
const router = express.Router();
//definimos rutas 
router.post('/crear', PsjControl.Crear);
router.get('/obtener', PsjControl.getTodos);
router.get('/traer/:id',PsjControl.getUno);
router.delete('/borrar/:id',PsjControl.eliminar);
router.put('/actualizar', PsjControl.editar);
module.exports = router;