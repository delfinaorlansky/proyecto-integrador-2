const DB = require ("../database/models");
const moduloLogin = require ("../modulo-login"); //para poder validar

module.exports = {

   //todos las reseñas
    index: (req,res) => {
        DB.Resenias
         .findAll (
        //      {

        //      include: ['usuario']
        //  }
         )
         .then(resenias => {
             return res.send(
                 resenias
            );
         })
         .catch(error => {
            return res.send(error);
        });
    },

// Creando Reseñas
    creaResenia: function (req, res) {
      moduloLogin.validar (req.body.email, req.body.password)  //para poder validar
      .then (function (usuario) {
          if (usuario) {   // Solo quiero una reseña si me retorna bien los datos del usuario.
            const resenia = {
                id_pelicula: req.body.id_pelicula,
                id_usuario: usuario.id,
                texto_de_reseña: req.body.texto_de_reseña,
                puntaje_sobre_pelicula: req.body.puntaje_sobre_pelicula
            }

            
              DB.Resenias.create (resenia)
              .then (function (resultado) {
                  res.render("gracias") // en caso de estar bien todos los datos del usuario crea la resenia y te envia a la vista "gracias"
              })
          } else {
              res.render("problema") // en caso de que los datos sean erroneos te enviara a la vista "problema"
          }
      })
    },
};