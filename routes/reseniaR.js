var express = require('express');
var router = express.Router();

//esto va  a --> localhost:3000/resenia
const controller = require('../controllers/reseniaController');
router.get("/", controller.index);


router.post('/creaResenia', controller.creaResenia)
module.exports = router;