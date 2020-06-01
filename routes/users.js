var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usuarioController");


router.get('/list', usersController.getAll);

router.get('/reviews', usersController.logUser);

router.post('/reviews', usersController.confirmUser);

router.get('/reviews/:id', usersController.getReviews);

router.get('/reviews/edit/:id', usersController.showEdit);

router.post('/reviews/edit/:id', usersController.confirmEdit);

router.get('/reviews/delete/:id', usersController.deleteReview);

router.post('/reviews/delete/:id', usersController.confirmDelete);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
