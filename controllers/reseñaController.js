const DB = require ("../database/models");

module.exports = {

   //todos las reseñas
    index: (req,res) => {
        DB.Reseñas
         .findAll({
             include: ['usuarios']
         })
         .then(reseñas => {
             return res.render('reseña.index', {
                 listaReseñas: reseñas
             });
         })
         .catch(error => {
            return res.send(error);
        });
    },
};