window.addEventListener("load", function(){
    document.querySelector(".lds-ring").style.display="block"
    document.querySelector(".contenedorDeTodo").style.display="none"
    document.querySelector("#header").style.display="none"
  
    setTimeout(function(){
      document.querySelector(".lds-ring").style.display="none"
      document.querySelector(".contenedorDeTodo").style.display="block"
      document.querySelector("#header").style.display="block"
    }, 1500);
  
    var queryString = new URLSearchParams(location.search);
    var detalles = queryString.get('id');
  
    var detallePelicula = "https://api.themoviedb.org/3/movie/" + detalles + "?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US"
  
  fetch(detallePelicula)
  .then(function(response) {
    return response.json();
  })
  
  .then(function(informacion) {
    console.log(informacion);
    document.querySelector(".titulo").innerHTML = informacion.title
    document.querySelector(".poster").innerHTML = "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + informacion.poster_path + "' alt='img producto'>"
    document.querySelector(".sinopsis").innerHTML = "Sinopsis:" + " " + informacion.overview
    document.querySelector(".lenguaje").innerHTML = "Lenguaje original:" + " " + informacion.original_language
    var generos = informacion.genres.map(function(genero){
      return '<a href = "generos.html?id='+ genero.id + '">'+ genero.name + '</a>'
    })
    document.querySelector(".generos").innerHTML = generos.join(" - ")
    document.querySelector(".estreno").innerHTML = "Fecha de estreno:" + " " + informacion.release_date
  
    fetch("https://api.themoviedb.org/3/movie/" + detalles + "/videos?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f")
    .then(function(response) {
      return response.json();
    })
    .then(function(infoVideo) {
      var codigoVideo = infoVideo.results[0].key
  
      document.querySelector("#trailer").src += codigoVideo
    })
  
  
        //document.querySelector(".contenedor_busqueda").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
      })
  
  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
  
  
  
  
  
  if (localStorage.getItem("usuario")== null) {
    document.querySelector(".button-fav").style.display = "none"
  }else {
    document.querySelector(".button-fav").style.display = "block"
  }
  
  var favoritos = document.querySelector(".button-favorito")
  favoritos.onclick = function (){
    UIkit.notification({
     message: 'Agregaste esta pelicula como favorita.',
     status: 'warning',
     pos: 'top-center',
     timeout: 3000,
   })
  }
  
  
  var recomendacionPelicula = "https://api.themoviedb.org/3/movie/"+detalles+"/recommendations?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1"
  // "https://api.themoviedb.org/3/movie/"+detalles+"/recommendations?api_key=​ebcc7d54892cbf6b9dd7c194bd052f2f​&page=1"
  
  fetch(recomendacionPelicula)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  
    var arrayDeRecomendacion= data.results
    var li
    for (var i = 0; i < 6; i++) {
      var id = data.results[i].id
      var titulo = data.results[i].title
      var imagen = data.results[i].poster_path
      console.log(titulo)
      li = "<article class='peliculas'>"
      li+= "<a href=detallePelicula.html?id="
      li += id
      li +=">"
      li+= "<img class='estrenos-imagenes' src='https://image.tmdb.org/t/p/original"
      li += imagen
      li +="' alt='img producto'>"
  
      li += "<h2 class='titulo-producto'>"
      li += "<a href=detallePelicula.html?id="
      li += id
      li +=">"
      li +=titulo
      li +="</a></h2></article>"
      // document.querySelector(".contenedor").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
      document.querySelector(".contenedor").innerHTML += li
    }
  
  })
  
  
  
  })
  function recomendaciones(){
    document.querySelector("div.contenedor").style.display= "block"
    document.querySelector(".subtitulo").style.display="none"
    document.querySelector(".subtitulo2").style.display = "block"
  }
  
  function recomendaciones2(){
    document.querySelector("div.contenedor").style.display= "none"
    document.querySelector(".subtitulo2").style.display = "none"
    document.querySelector(".subtitulo").style.display = "block"
  }
  
  
  function marcarComoFavorito() {
    var queryString = new URLSearchParams(location.search);
    var idPelicula = queryString.get('id');
    console.log(idPelicula)
    var listaDeFavoritos = localStorage.getItem("favoritos")
  
          if (listaDeFavoritos) {
              var listaDeFavoritosJS = JSON.parse(listaDeFavoritos)
              var listaFiltrada = listaDeFavoritosJS.filter(function(elementoFavorito){
                return elementoFavorito == idPelicula
              })
              if (listaFiltrada.length == 0) {
                listaDeFavoritosJS.push (idPelicula)
                localStorage.setItem ("favoritos", JSON.stringify (listaDeFavoritosJS))
              }
          }
          else {
            var nuevaListaFavorito = [idPelicula]
              localStorage.setItem("favoritos", JSON.stringify (nuevaListaFavorito))
            }
  }
  