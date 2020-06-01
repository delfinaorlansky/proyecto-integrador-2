const DB = require ("../database/models");

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
    const moduloLogin: require ("../moduloLogin"); //para poder validar
    module.exports= {
        form: function(req, res) {
            res.render('nuevaResenia', {
                id_pelicula: req.query.id_pelicula
            })
        }
    }
};