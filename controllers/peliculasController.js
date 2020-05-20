const controlador = {

index: (req, res) => {
    res.send('Index de productos');
},
home: (req, res) => {
    res.render('home')

},
detallePelicula: (req, res) => {
    res.render('detallePelicula')
},
reseña: (req, res) => {
    res.send('reseña');
}
}

const DB = require ("../database/models");
 DB.Usuarios.findAll ({
     include : [
         {association: "reseñas"}
        ]
 })
  .then (usuario => {
      return res.render("usuarioIndex", {
          listadoUsuarios: usuarios
      });
  })


module.exports = controlador


