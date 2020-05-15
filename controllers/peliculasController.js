const controlador = {

index: (req, res) => {
    res.send('Index de productos');
},
home: (req, res) => {
    res.render('home')

},
detalle: (req, res) => {
    res.render('detallePelicula')
}

}


module.exports = controlador