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


// router.get('/list', controller.getAll);

router.get('/reviews', controller.logUser);

router.post('/reviews', controller.confirmUser);

router.get('/reviews/:id', controller.getReviews);

router.get('/reviews/edit/:id', controller.showEdit);

router.post('/reviews/edit/:id', controller.confirmEdit);

router.get('/reviews/delete/:id', controller.deleteReview);

router.post('/reviews/delete/:id', controller.confirmDelete);


module.exports = router;
