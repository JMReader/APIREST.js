//defino el controlador de la api 
const PersonaControl = require('../controllers/persona.controller');;
//creamos el manejador de rutas express
const express = require('express');
const router = express.Router();
//definimos rutas 

router.post('/crear', PersonaControl.crear);
router.get('/obtener', PersonaControl.getPersonas);
router.get('/ObtenerxDNI', PersonaControl.getPersonaDNI);
router.get('/ObtenerxID', PersonaControl.getPersonaID);

module.exports = router;