//defino el controlador de la api 
const LibroControl = require('../controllers/libro.controller');
//creamos el manejador de rutas express
const express = require('express');
const router = express.Router();
//definimos rutas 
router.delete('/borrar/:id', LibroControl.deleteLibro);
router.post('/create', LibroControl.createLibro);
router.get('/obtenerLibros', LibroControl.getTodosLibros);
router.get('/destacados', LibroControl.filtrarDestacados);
router.put('/actualizar/:id', LibroControl.editLibro);
module.exports = router;