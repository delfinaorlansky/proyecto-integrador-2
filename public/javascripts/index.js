window.addEventListener("load", function(){


    //app y appold.js//
    
    document.querySelector("form.busqueda").onsubmit = function(e) {
      if (document.querySelector(".texto-busqueda").value.length <= 3) {
        e.preventDefault()
          UIkit.notification({
           message: 'Por favor, ingrese minimo 3 caracteres.',
           status: 'warning',
           pos: 'top-center',
           timeout: 3000,
         })
      }
    }
    
      window.onclick = function(e) {
        var myDropdown = document.getElementById("myDropdown");
    
        if (!e.target.matches('.dropbtn')) {
    
    
    
            myDropdown.classList.remove('show');
    
        } else {
    
    
            myDropdown.classList.add('show');
    
        }
      }
    
      var working = false;
    $('.login').on('submit', function(e) {
      e.preventDefault();
      if (working) return;
      working = true;
      var $this = $(this),
        $state = $this.find('button > .state');
      $this.addClass('loading');
      $state.html('Authenticating');
      setTimeout(function() {
        $this.addClass('ok');
        $state.html('Welcome back!');
        setTimeout(function() {
          $state.html('Log in');
          $this.removeClass('ok loading');
          working = false;
        }, 4000);
      }, 3000);
    });
    //   // Get the modal
    // var modal = document.getElementById('id01');
    //
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
    // window.onclick = function(e) {
    //   var myDropdown = document.getElementById("myDropdown");
    //
    //   if (!e.target.matches('.dropbtn')) {
    //
    //
    //
    //       myDropdown.classList.remove('show');
    //
    //   } else {
    //
    //
    //       myDropdown.classList.add('show');
    //
    //   }
    // }
    
    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
    
    var soyLaUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US"
    fetch(soyLaUrl)
    .then(function(response) {
    return response.json()
    })
    .then(function(information) {
    console.log(information.genres);
    
    var generos_array = information.genres
    console.log(generos_array);
    
    for (var i = 0; i < generos_array.length; i++) {
      var id = generos_array[i].id
      var title = generos_array[i].name
    
    
    
      var generos = document.querySelector(".dropdown-content").innerHTML += "<p><a href=generos.html?id=" + id + ">" + title + "</a></p>"
    }
    
    
    })
    
    .catch(function(error) {
    console.log("Error: " + error);
    })
    
    
    
      var urlEstrenos = "https://api.themoviedb.org/3/movie/now_playing?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1"
    
     var urlConstante = "https://image.tmdb.org/t/p/original/"
    fetch(urlEstrenos)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data.results);
    
        var arrayDeEstrenos= data.results
        var li
        for (var i = 0; i < arrayDeEstrenos.length; i++) {
          console.log(arrayDeEstrenos);
          var id = data.results[i].id
          var titulo = data.results[i].title
          var imagen = data.results[i].poster_path
          li = "<li class='mySlides1'>"
            li += '<a href="detallePelicula?id='+id+'">'
            li += "<img class='carousel1' src='" + urlConstante + imagen + "' >"
            li+= "</a>"
          li += '</li>'
    
    // console.log("<div class='carousel-item active'> <div class='carousel-caption d-none d-md-block'> <img src='" + urlConstante + imagen + "' class='d-block w-100' alt='350px'> <a href='peliculas.html' class='h3_carousel'> <h3>Peliculas</h3> </a> <p>Si desea ver mas peliculas, haga click en el boton peliculas</p></div></div>");
          document.querySelector('ul.estrenos').innerHTML += li
          //dejo visivle solo la primer imagen
    
        }
        showSlides(1, 0);
      })
    
      .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
    
    // Depende de la URL
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US&page=1")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data.results);
    
          var arrayDeEstrenos= data.results
          var li
          for (var i = 1; i < arrayDeEstrenos.length; i++) {
            console.log(arrayDeEstrenos);
            var id = data.results[i].id
            var titulo = data.results[i].title
            var imagen = data.results[i].poster_path
            // DEPENDE DEL CARROUSEL
            li = "<li class='mySlides2'>"
              li += '<a href="detallePelicula?id='+id+'">'
              li += "<img class='carousel1' src='" + urlConstante + imagen + "' >"
              li+= "</a>"
            li += '</li>'
    
      // console.log("<div class='carousel-item active'> <div class='carousel-caption d-none d-md-block'> <img src='" + urlConstante + imagen + "' class='d-block w-100' alt='350px'> <a href='peliculas.html' class='h3_carousel'> <h3>Peliculas</h3> </a> <p>Si desea ver mas peliculas, haga click en el boton peliculas</p></div></div>");
            document.querySelector('ul.populares').innerHTML += li
            //dejo visivle solo la primer imagen
    
          }
          // DEPENDE DEL CARROUSEL
          showSlides(1, 1);
        })
    
        .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
    
    
    
    
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7beff09c9fd5a79010c5ce4883840da9&page=1")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data.results);
    
            var arrayDeEstrenos= data.results
            var li
            for (var i = 0; i < arrayDeEstrenos.length; i++) {
              console.log(arrayDeEstrenos);
              var id = data.results[i].id
              var titulo = data.results[i].title
              var imagen = data.results[i].poster_path
              // DEPENDE DEL CARROUSEL
              li = "<li class='mySlides3'>"
                li += '<a href="detallePelicula?id='+id+'">'
                li += "<img class='carousel1' src='" + urlConstante + imagen + "' >"
                li+= "</a>"
              li += '</li>'
    
        // console.log("<div class='carousel-item active'> <div class='carousel-caption d-none d-md-block'> <img src='" + urlConstante + imagen + "' class='d-block w-100' alt='350px'> <a href='peliculas.html' class='h3_carousel'> <h3>Peliculas</h3> </a> <p>Si desea ver mas peliculas, haga click en el boton peliculas</p></div></div>");
              document.querySelector('ul.mejorPuntuadas').innerHTML += li
              //dejo visivle solo la primer imagen
    
            }
            // DEPENDE DEL CARROUSEL
            showSlides(1, 2);
          })
    
          .catch(function(error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
          });
    
    
          fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7beff09c9fd5a79010c5ce4883840da9&page=1")
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              console.log(data.results);
    
              var arrayDeEstrenos= data.results
              var li
              for (var i = 4; i < arrayDeEstrenos.length; i++) {
                console.log(arrayDeEstrenos);
                var id = data.results[i].id
                var titulo = data.results[i].title
                var imagen = data.results[i].poster_path
                // DEPENDE DEL CARROUSEL
                li = "<li class='mySlides4'>"
                  li += '<a href="detallePelicula?id='+id+'">'
                  li += "<img class='carousel1' src='" + urlConstante + imagen + "' >"
                  li+= "</a>"
                li += '</li>'
    
          // console.log("<div class='carousel-item active'> <div class='carousel-caption d-none d-md-block'> <img src='" + urlConstante + imagen + "' class='d-block w-100' alt='350px'> <a href='peliculas.html' class='h3_carousel'> <h3>Peliculas</h3> </a> <p>Si desea ver mas peliculas, haga click en el boton peliculas</p></div></div>");
                document.querySelector('ul.proximasPeliculas').innerHTML += li
                //dejo visivle solo la primer imagen
    
              }
              // DEPENDE DEL CARROUSEL
              showSlides(1, 3);
            })
    
            .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
            });
    
    
    })
    // AGREGAR UN NUMERO MAS POR CARROUSEL
    var slideIndex = [1,1,1,1];
    // AGREGAR UNO MAS POR CARROUSEL
    var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
    
    
    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }
    
    function showSlides(n, no) {
      var i;
      var x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {slideIndex[no] = 1}
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      x[slideIndex[no]-1].style.display = "block";
    }
    