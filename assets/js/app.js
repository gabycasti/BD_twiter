//Archivo de twits para guardarlo en base de datos y mostrarlo en pantalla
$(document).ready(function(){

$('#enviar_mensaje').click(function(){

   mensajes(twits)

  });



});

function mensajes(twits) {

var d = new Date();
var fecha = d.getDay()+ '' + d.getMonth()+ '' + d.getFullYear() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
var hora = d.getDay()+ '/' + d.getMonth()+ '/' + d.getFullYear() + '/ ' + d.getHours() + ':' + d.getMinutes()
  
// Rescatar información del formulario crear perfil
// haciendo referencia a el campo usuarios de la base de datos
    var twits = db.ref('twits');
    var mensaje_twit = $('#txt_mensaje').val();
 
  
// Creo un objeto para almacenar los datos de un usuario
  // Creo un objeto para almacenar los datos de un usuario
      var twit = new Object();
      twit.nick=nick;
      twit.nombre=nombre;
      twit.mensaje= mensaje_twit;
      twit.foto= foto;
      twit.hora = hora;
//Llamo al campo referencia de usuarios de la base de datos que es nick 
// Guardo con set el objeto usuario con todos los datos de los usuarios
//llamo al campo referencia de usuarios de la base de datos que es nick 
// guardo con set el objeto usuario con todos los datos de los usuarios
    //  usuarios.child(nick).set(usuario);
     console.log(twit);

      twits.child(nick + fecha).set(twit);
      sessionStorage['usuarioLogueado'] = nick;


 $('#mensajes').append('<div class="container margen">'+
        '<div class="row">'+
            '<div class="col-lg-12 mensajes_twits">'+
                '<div class="row">'+
                    '<div class="col-lg-1">'+
                        '<img src="'+ foto +'" class="img-thumbnail imagen" alt="...">'+
                    '</div>'+
                    '<div class="col-lg-11 texto">'+
                        '<h6>'+ nombre +'</h6>'+
                        '<p id="texto_mensaje"><span>'+ mensaje_twit +'</span></p>'+
                        '<h6>'+ hora +'</h6>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>');
};