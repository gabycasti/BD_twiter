<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKixYYlq9PAFw0sljESzo6cZitRaTcRrI",
    authDomain: "twiter-4b893.firebaseapp.com",
    databaseURL: "https://twiter-4b893.firebaseio.com",
    projectId: "twiter-4b893",
    storageBucket: "",
    messagingSenderId: "751461675240"
  };

firebase.initializeApp(config);
var db = firebase.database();



var expresion= /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){

	//$('#enviar_mensaje').click(function(){
	//	var mensaje = $('#texto_mensaje').val();
	//	mensajes(mensaje);
	//})

    /* El metodo .test nos valida si se cumple o no la expresión regular
    * En este caso lo esta negando es decir si no se cumple
    * Me retorna un valor booleano verdadero o false      
    */
     $('#enviar_for').click(function(){
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var clave = $('#clave').val();
        var pais = $('#pais').val();


        if(nombre == ''){
           $('#mensaje_nombre').fadeIn();
           return false;
        }else{
            $('#mensaje_nombre').fadeOut();
            if(email == '' || !expresion.test(email)){
              $('#mensaje_correo' ).fadeIn();
               return false;
        }else{
            $('#mensaje_correo').fadeOut();
            if(clave == ''){
                $("#mensaje_clave").fadeIn();
                 return false;
        }else{
            $('#mensaje_clave').fadeOut();
            if(pais == ''){
               $("#mensaje_pais").fadeIn();
                return false;
        }else{
            $('#mensaje_pais').fadeOut();
            if (!($('#check').prop('checked'))){
               $("#mensaje_condi").fadeIn();
                return false;
         }
        }
       }
      }
    } 
       document.location.replace('twits.html')
   });


});



function mensajes(twits) {
  var mensaje_twit = $('#texto_mensaje').val();

 $('#mensajes').append('<div class="row character">' +
    '<div class= "col-md-1 text-center">'+
    '<img src="img/recipes/640x480/' + imagen_perfil + '.jpg">'+
    '</div>' +
    '<div class= "col-lg-11 mensajes_new">'+
    '<h3>' + mensaje_twit + '</h3>' +
    '</div>' +
    '</div>')
}
