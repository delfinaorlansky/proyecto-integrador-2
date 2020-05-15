window.addEventListener("load",function(){
    document.querySelector(".lds-ring").style.display="block"
    document.querySelector(".contenedorDeTodo").style.display="none"
  
    setTimeout(function(){
      document.querySelector(".lds-ring").style.display="none"
      document.querySelector(".contenedorDeTodo").style.display="block"
    }, 1500);
  
  
  
  
  console.log(localStorage);
    if (localStorage.getItem("usuario")!= null){
      document.querySelector("#login").style.display = "none"
      document.querySelector(".preferidas").style.display = "block"
      document.querySelector(".boton_logOut").style.display = "block"
      document.querySelector(".boton_deHome2").style.display = "block"
      document.querySelector(".boton_deHome").style.display = "none"
      var usuario = document.querySelector(".nombre")
      usuario.innerHTML = "<p>Hola, "+localStorage.getItem("usuario")+"</p>"
      console.log(localStorage.getItem("usuario"));
    }
  
    var formulario = document.querySelector(".formularioDeLogIn")
    var nombre = formulario.querySelector("input[name='nombre']")
    var email = formulario.querySelector("input[name='email']")
    var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    formulario.onsubmit = function(e){
      e.preventDefault()
      if (nombre.value == "" && email.value.match(mailformat)== null){
        e.preventDefault()
        UIkit.notification({
         message: 'Por favor, complete todos los campos.',
         status: 'warning',
         pos: 'top-center',
         timeout: 1500,
       })
      }else if(nombre.value == ""){
        e.preventDefault()
        UIkit.notification({
         message: 'Por favor, ingrese su nombre.',
         status: 'warning',
         pos: 'top-center',
         timeout: 3000,
       })
      }else if (email.value.match(mailformat)== null){
      e.preventDefault()
      UIkit.notification({
       message: 'Por favor, ingrese su email.',
       status: 'warning',
       pos: 'top-center',
       timeout: 3000,
     })
    } else{
      e.preventDefault()
      localStorage.setItem('usuario', nombre.value)
      document.querySelector("#login").style.display = "none"
      document.querySelector(".preferidas").style.display = "block"
      document.querySelector(".boton_logOut").style.display = "block"
      document.querySelector(".boton_deHome2").style.display = "block"
      document.querySelector(".boton_deHome").style.display = "none"
      var usuario = document.querySelector(".nombre")
      usuario.innerHTML = "<p>Hola, "+localStorage.getItem("usuario")+"</p>"
      console.log(localStorage.getItem("usuario"));
      document.querySelector('#login').style.display = "none"
      document.querySelector('.preferidas').style.display = "block"
      document.querySelector(".boton_logOut").style.display = "block"
      document.querySelector(".boton_deHome2").style.display = "block"
      document.querySelector(".boton_deHome").style.display = "none"
      document.querySelector('.boton_cancelar').click()
      location.reload();
    }
  }
  
  if (localStorage.getItem("usuario")== null) {
    document.querySelector(".boton_logOut").style.display = "none"
    document.querySelector(".boton_deHome2").style.display = "none"
  }
  
  
  
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
  
  document.querySelector(".boton_logOut").onclick = function() {
  localStorage.clear ()
    location.reload();
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
  
  
  
  
  
  })
  