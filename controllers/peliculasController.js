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
reseña: (req, res) => {
    res.send('reseña');
}
}


module.exports = controlador