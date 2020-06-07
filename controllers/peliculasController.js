const DB= require('../database/models')

const controlador = {

index: (req, res) => {
    res.send('Index de productos');
},
home: (req, res) => {
    res.render('home')

},
detallePelicula: (req, res) => {
    DB.Resenias
    .findAll ({
        where: [
           { id_pelicula: req.query.id }
        ], 
        include: ['usuario']
    }) 
    .then(resenias => {
        return res.render('detallePelicula', {
            reseniaPelicula: resenias,
            idPelicula: req.query.id
        }); // este metodo trae abajo de cada detalle de pelicula todas las resenias realizadas sobre esa pelicula
    }) 
    .catch(error => {
        res.send (error)
    })
}, 
estrenos: (req,res) =>{
res.render('estrenos')

},
popular: (req,res) =>{
    res.render('popular')
    
},
top100: (req,res) =>{
    res.render('top100')
    
},
proximas: (req,res) =>{
    res.render('proximas')
    
},

login: function(req,res){
    var saludo = "hola"
    res.render('login', {saludo:saludo, pagina:"login"})
    
},



}


module.exports = controlador


