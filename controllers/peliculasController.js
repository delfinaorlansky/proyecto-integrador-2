const controlador = {

index: (req, res) => {
    res.send('Index de productos');
},
home: (req, res) => {
    res.render('home')

},
detallePelicula: (req, res) => {
    res.render('detallePelicula')
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

comparacion: function(req,res){
    moduloLogin.chequearUsuario(req.body.email)
    .then(resultado =>{
        if (resultado == false){
            console.log("El email ingresado no se encuentra en la base de datos");

        }
        else{
            console.log("el email ingresado esta en la base de datos");

            moduloLogin.buscarPorEmail(req.body.email)
            .then(usuario =>{
                console.log(req.body.password);
                console.log(usuario.userPass);
                console.log(bcrypt.compareSync(req.body.password, usuario.userPass));

                if (bycrypt.compareSync(req.body.password, usuario.userPass)){
                    var nombre = usuario.nombre_de_usuario
                    var idUsuario = usuario.id_usuario

                    res.send( nombre + 'Te logueaste, con id:' + idUsuario)
                }
                else{
                    res.send('Datos Invalidos')
                }
            })
        }
    })
}

}


module.exports = controlador


