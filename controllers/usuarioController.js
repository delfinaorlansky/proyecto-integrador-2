const DB = require ("../database/models");

module.exports = {

   //todos los usuarios
    index: (req,res) => {
        DB.Usuarios
         .findAll()
         .then(usuarios => {
             return res.render("usuarioIndex" , {
                 listadoUsuarios: usuarios
             });
         })
         .catch(error => {
            return res.send(error);
        });
    },
 
    // detalle / reseña del usuario
    detalle: (req, res) => {
        DB.Usuarios
        .findByPK (req.params.id, {
            include: ['resenia'], 
        }) 
        .then (usuario => {
            return res.render("usuarioDetalle", {
                elUsuario : usuario 
            }); 
        })
        .catch (error => {
            return res.send("error:")
        });
    }

};