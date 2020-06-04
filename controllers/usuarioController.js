const DB = require ("../database/models");
const OP = DB.Sequelize.Op;  //operadores de sequelize que necesito incluir (tipo like)
let bcrypt = require ("bcryptjs") ; // Me da funciones, le das un string y lo hashea.
const moduloLogin = require('../modulo-login');

module.exports = { 

   //todos los usuarios
    index: (req,res) => {
        DB.usuario
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
        DB.usuario
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
     DB.usuario
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
        moduloLogin.chequearUsuario(req.body.email)  // si el usuario ya existe, que no lo deje crear de vuelta
        .then(function (existeUsuario) {
            if (existeUsuario) {
                return res.redirect('/usuario/crearusuario?existeUsuario=true');
            } else {
                DB.usuario.create ({   // A create le paso un objeto literal con el nombre del campo de la columna. Es asincronico.
                    nombre_de_usuario: req.body.nombre_de_usuario,
                    email: req.body.email,
                    fecha_de_nacimiento: req.body.fecha_de_nacimiento,
                    password: bcrypt.hashSync(req.body.password)
                 })
                 .then (resultado => {
                    return res.redirect ("/")  // Una vez registrado, que lo devuelva a la pagina de home.
                 })
            }
        })
     

    },


    logUser: function (req,res) {
        res.render('login', { tipo: "log"});
    },

    confirmUser: function (req, res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado =>{
           //res.send(resultado);
            if(resultado == undefined){
                res.render("incorrecto")
            } else {
                res.redirect('/usuario/reviews/' + resultado.id)
            }
        })
    },
    getReviews: function(req,res){
        DB.Resenias.findAll({
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
        DB.Resenias.findOne({
            where: [
                {id: req.params.id}
            ]
        })
        .then(resultado => {
            res.render('editReview', {resultado: resultado})
        })
    },

    confirmEdit: function (req,res) {

        DB.Resenias.update({
            texto_de_reseña: req.body.resenia,
            puntaje_sobre_pelicula: req.body.puntaje
        },{
            where: {
                id: req.params.id,
            }
        }
        ).then(() => {
            DB.Resenias.findByPk(req.params.id)
            .then(resultado =>{
                res.redirect('/usuario/reviews/'+resultado.id_usuario)
            })
        })
    },

    deleteReview: function (req,res){
        res.render('login', { tipo: "delete", deleteid: req.params.id})
    },

    confirmDelete: function (req, res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado =>{
            if (resultado != null){
                DB.Resenias.destroy({
                    where: {
                        id: req.params.id,
                    }
                })
                res.redirect("/usuario/reviews/")
            }else{
                res.render("incorrectoBorrar")
            }
        })
    },

   
};
