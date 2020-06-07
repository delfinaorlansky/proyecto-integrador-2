const DB = require ("../database/models");  //incluimos la conexion a la base de datos
const OP = DB.Sequelize.Op;  //operadores de sequelize que necesito incluir (tipo like, where)
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
                     id: req.params.id  //queremos que busque el usuario por id
                 },
            
            include: 
                {association:'resenias'}   // que en el detalle del usuario, aparezcan sus reseñas
            
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
                 .then (resultado => { //Esto va a pasar solo si el usuario no estaba previamente registrado
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
                res.render("incorrecto")  //si los datos ingresados estan mal, lo redirije a la view incorrecto. 
            } else {
                res.redirect('/usuario/reviews/' + resultado.id) //si esta bien lo lleva a la pagina con sus reseñas
            }
        })
    },
    getReviews: function(req,res){
        DB.Resenias.findAll({
            where: [
                {id_usuario: req.params.id}
            ],
            include: [                     // Include: Recibe un array (así le explicamos cómo traer la relación),
                {association: "usuario"}   //le decimos en un objeto literal que nosotros ya definimos una asociación que es usuario.
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

        DB.Resenias.update({ //metodo para editar registros de la tabla, recibe 2 objetos literales.
            texto_de_reseña: req.body.resenia,          //los campos de la tabla a cambiar y sus valores.
            puntaje_sobre_pelicula: req.body.puntaje
        },{
            where: {
                id: req.params.id,   //where indicando en que registro hacer los cambios (si no lo pogno se cambian todos los campos de la BD)
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
                DB.Resenias.destroy({   //metodo que permite eliminar registros de la tabla.
                    where: {
                        id: req.params.id,  //Recibe solo un parametro: un objeto literal con un where.
                    }
                })
                res.redirect("/usuario/reviews/") //si estan bien los datos, lo devuelve a la pagina de entrar a ver sus reseñas
            }else{
                res.render("incorrectoBorrar")  //si los datos estan mal, lo redirije a la view incorrectoBorrar con la opcion de volver a intentar.
            }
        })
    },

   
};
