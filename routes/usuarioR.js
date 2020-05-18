var express = require('express');
var router = express.Router();
//esto va  a --> localhost:3000/usuario

const peliculasController = require('../controllers/peliculasController');
router.get("/", peliculasController.index);

module.exports = router;
