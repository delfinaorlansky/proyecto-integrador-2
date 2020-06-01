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

    form: function(req, res) {
        res.render('nuevaResenia', {
            id_pelicula: req.query.id_pelicula
        })
    }
    
};