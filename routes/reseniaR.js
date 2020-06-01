var express = require('express');
var router = express.Router();

//esto va  a --> localhost:3000/resenia
const controller = require('../controllers/reseniaController');
router.get("/", controller.index);
router.get('/creaResenia', controller.form)
router.post('/creaResenia', controller.form)
module.exports = router;