var express = require('express');
var router = express.Router();

//esto va  a --> localhost:3000/usuario
const controller = require('../controllers/usuarioController');
router.get("/", controller.index);

// esto va a --> localhost:3000/usuario/detalle
router.get("/detalle/:id" , controller.detalle);

//router.get('/detalle/:id', controller ); 

// esto va a --> /usuario/buscador
router.post("/buscador", controller.buscador)
module.exports = router;
