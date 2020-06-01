const DB = require ("../database/models");
const OP = DB.Sequelize.Op;  //operadores de sequelize que necesito incluir (tipo like)
let bcrypt = require ("bcryptjs") ; // Me da funciones, le das un string y lo hashea.

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
              email: { [OP.like]: "%"+ busquedaUsuario+ "%" }  // Comodin --> pongo el porcentaje en ambos lados asi me busca lo que coincida con lo que esta en el medio, en cualquier parte de la palabra.
          }
     })
      .then(usuarios => {  //usuarios puede ser un nombre cualqueira. Va a ser el nombre a lo que obtenemos de respuesta del pedido asincronico. 
          res.render("usuarioIndex" , {
            listadoUsuarios: usuarios,
            tituloDePagina: "Resultado de la busqueda"  //no hago otra view, uso la misma donde liste a los usuarios.
        })
    })
     
    },

    // Crear nuevo Usuario
    creadorUsuario : (req,res) => {
     DB.Usuarios.create ({   // A create le paso un objeto literal con el nombre del campo de la columna. Es asincronico.
        nombre_de_usuario: req.body.nombre_de_usuario,
        email: req.body.email,
        fecha_de_nacimiento: req.body.fecha_de_nacimiento,
        password: bcrypt.hashSync(req.body.password)
     })
     .then (resultado => {
         res.redirect ("/home")  // Una vez registrado, que lo devuelva a la pagina de home.
     })

    },


    logUser: function (req,res) {
        res.render('login', { tipo: "log"});
    },

    confirmUser: function (req, res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado =>{
            if(resultado == undefined){
                res.redirect('/usuarioR/reviews');
            } else {
                res.redirect('/usuarioR/reviews' + resultado.id)
            }
        })
    },
    getReviews: function(req,res){
        DB.resenia.findAll({
            where: [
                {id_usuario: req.params.id}
            ],
            include: [
                {association: "usuario"}
            ]
        })
        .then(resultado =>{
            console.log(resultado);
            res.render('reviews', {resultado:resultado})
        })
    },

    showEdit: function (req,res){
        DB.resenia.findeOne({
            where: [
                {id: req.params.id}
            ]
        })
        .then(resultado => {
            res.render('editReview', {resultado: resultado})
        })
    },

    confirmEdit: function (req,res) {
        let updateR = {
            resenia: req.body.resenia,
            puntaje: req.body.puntaje,
            id: req.params.id
        }
        DB.resenia.update({
            resenia: updateR.resenia,
            puntaje: updateR.puntaje
        },{
            where: {
                id: updateR.id,
            }
        }
        ).then(() => {
            DB.resenia.findByPk(req.params.id)
            .then(resultado =>{
                res.redirect('/usuarioR/reviews/'+resultado.id_usuario)
            })
        })
    },

    deleteReview: function (req,res){
        res.render('login', {tipo: "delete", deleteid: req.params.id})
    },

    confirmDelete: function (req, res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado =>{
            if (resultado != null){
                DB.resenia.destroy({
                    where: {
                        id: req.params.id,
                    }
                })
                res.redirect('/usuarioR/reviews')
            }else{
                res.redirect('/usuarioR/reviews/delete/'+ req.params.id)
            }
        })
    },

   
};
