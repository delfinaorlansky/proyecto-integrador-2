var express = require('express');
var router = express.Router();

const peliculasController = require('../controllers/peliculasController');

router.get('/', peliculasController.proximas);



module.exports = router;
