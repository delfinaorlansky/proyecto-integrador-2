var express = require('express');
var router = express.Router();

//esto va  a --> localhost:3000/usuario
const controller = require('../controllers/usuarioController');
router.get("/", controller.index);

// esto va a --> localhost:3000/usuario/detalle
router.get("/detalle/" , controller.detalle);

module.exports = router;
