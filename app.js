var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var peliculasRouter = require('./routes/peliculas');
var estrenosRouter = require ('./routes/estrenos');
var homeRouter = require('./routes/home');
var detalleRouter = require('./routes/detalle');
var usuarioRouter = require ('./routes/usuarioR');
var reseniaRouter = require ('./routes/reseniaR');
var popularRouter = require('./routes/popular');
var top100Router = require('./routes/top100');
var proximasRouter = require('./routes/proximas');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/peliculas', peliculasRouter);
app.use('/', homeRouter);
app.use('/detallePelicula', detalleRouter);
app.use('/usuario', usuarioRouter);
app.use('/resenia', reseniaRouter);
app.use('/estrenos', estrenosRouter);
app.use('/popular', popularRouter);
app.use('/top100', top100Router);
app.use('/proximas', proximasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
