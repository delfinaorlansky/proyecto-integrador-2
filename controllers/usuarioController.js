const DB = require ("../database/models");
const OP = DB.Sequelize.Op;  //operadores de sequelize que necesito incluir (tipo like)

module.exports = {

   //todos los usuarios
    index: (req,res) => {
        DB.Usuarios
         .findAll()
         .then(usuarios => {
             return res.render("usuarioIndex" , {
                 listadoUsuarios: usuarios,
                 tituloDePagina: "Listado de usuarios"
             });
         })
         .catch(error => {
            return res.send(error);
        });
    },
 
    // detalle del usuario con su reseña 
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
    },

    //Buscador de usuario
    buscador: (req, res) => {
    let busquedaUsuario = req.body.busqueda //aca almacenamos en una variable lo que busco el usuario. Uso .body porque me estoy manejando por POST.
     DB.Usuarios
     .findAll({
          where: {    //objeto literal de lo que quiero que me traiga.
              email: { [OP.like]: "%"+ busquedaUsuario+ "%" }  //pongo el porcentaje en ambos lados asi me busca lo que coincida con lo que esta en el medio, en cualquier parte de la palabra.
          }
     })
      .then(usuarios => {  //usuarios puede ser un nombre cualqueira. Va a ser el nombre a lo que obtenemos de respuesta del pedido asincronico. 
        if (usuarios.lenght !=0) { 
        return res.render("usuarioIndex" , {
            listadoUsuarios: usuarios,
            tituloDePagina: "Resultado de la busqueda"  //no hago otra view, uso la misma donde liste a los usuarios.
        });
    } else {
        res.render("usuarioIndex" , {
            usuarios: "No se encontraron resultados"
        })
    }
      })
     
    }
   
};
