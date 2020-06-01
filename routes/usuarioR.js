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

//esto va a --> /usuario/crearUsuario
router.get("/crearUsuario" , function (req, res) {
    res.render ("nuevoUsuario")    //me lleva al formulario de registracion
})

// para enviar el form de creador usuario, uso la misma ruta que arriba pero con el metodo POST (el dato no es visible en la url)
router.post("/crearUsuario" , controller.creadorUsuario)


// router.get('/list', controller.getAll);

router.get('/reviews', controller.logUser); // formulario de logueo

router.post('/reviews', controller.confirmUser); // Proceso el login y redirecciona al listado de mis reseñas

router.get('/reviews/:id', controller.getReviews); // Listado de mis reseñas

router.get('/reviews/edit/:id', controller.showEdit); // Formulario para editar una reseña

router.post('/reviews/edit/:id', controller.confirmEdit); // procesa la edicion de una reseña

router.get('/reviews/delete/:id', controller.deleteReview); // Formulario para confirmar eliminacion de reseña

router.post('/reviews/delete/:id', controller.confirmDelete); // Proceso que confirma la eliminacion


module.exports = router;
