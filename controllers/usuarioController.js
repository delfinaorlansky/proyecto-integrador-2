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
        console.log(req.params.id)
        DB.Usuarios
        .findAll (
            {
                 where: {
                     id: req.params.id
                 },
            
            include: 
                {association:'resenias'}
            
        }) 
        .then (usuario => {
        return res.render("usuarioDetalle", {
               elUsuario : usuario[0]
           }); 
        })
        .catch (error => {
            return res.send("error:" + error)
        });
    }

};