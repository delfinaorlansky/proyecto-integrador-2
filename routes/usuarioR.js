var express = require('express');
var router = express.Router();
//esto va  a --> localhost:3000/usuarios

const peliculasController = require('../controllers/peliculasController');
router.get("/", controller.index);

module.exports = router;
