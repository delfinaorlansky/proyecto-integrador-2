var express = require('express');
var router = express.Router();


const peliculasController = require('../controllers/peliculasController');

//localhost:3000/detallePelicula
router.get('/', peliculasController.detallePelicula);


module.exports = router;
