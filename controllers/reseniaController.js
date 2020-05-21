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
};