window.addEventListener("load", function(){

    var urlEstrenos = "https://api.themoviedb.org/3/movie/popular?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1"


  fetch(urlEstrenos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);

    var arrayDeEstrenos= data.results
    var li
    for (var i = 0; i < arrayDeEstrenos.length; i++) {
      var id = data.results[i].id
      var titulo = data.results[i].title
      var imagen = data.results[i].poster_path
      console.log(titulo)
      li = "<article class='peliculas'>"
      li+= "<a href=detallePelicula?id="
      li += id
      li +=">"
      li+= "<img class='estrenos-imagenes' src='https://image.tmdb.org/t/p/original"
      li += imagen
      li +="' alt='img producto'>"

      li += "<h2 class='titulo-producto'>"
      li += "<a href=detallePelicula?id="
      li += id
      li +=">"
      li +=titulo
      li +="</a></h2></article>"
      // document.querySelector(".contenedor").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
      document.querySelector(".contenedor").innerHTML += li
    }
  })

  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });

  })
