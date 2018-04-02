//Autenticación para hacer uso del storage
//var authService = firebase.auth();
//Base de datos de imagenes
//var dbFotos = firebase.storage();


$(document).ready(function(){
$("#correo").val("");
$("#clave").val("");

$("#btn-login").click(function(){
        //Función ingresar usuario y contraseña
        var usuarios = db.ref('usuarios');
        usuarios.on('value',function(ss){
            var usuario = ss.val();
        // Suiche que me indica si encontre el correo y la clave en caso de encontrarlo cambia valor de 0 a 1
            var logeado = 0;
            usr = Object.keys(usuario); //ASOCIAR LOS DATOS DEL OBJETO A UNA VARIABLE
            for(i=0; i<usr.length; i++){
                if(usuario[usr[i]].correo == $("#correo").val() && usuario[usr[i]].clave == $("#clave").val() )
                {
                  //VARIABLE DE SESION PARA GUADRA EL NICK
                  sessionStorage['usuarioLogueado'] = usr[i];
                  logeado=1
                }   
            }
            if(logeado == 1){
              document.location.replace('twits.html')
            }else 
              {
                $("#datos_error").html("Ese usuario no existe o la contraseña esta incorrecta");
                $("#datos_error").show();

            }
        })
    })

$("#clave").keypress(function(){
  $("#datos_error").hide();
  var usuario = $("#correo").val();
  if(usuario == ""){
    $("#usuario_incorrecto").html("Introduzca su email");
  }
});

$("#correo").keypress(function(){
  $("#datos_error").hide();
  $("#usuario_incorrecto").hide();
})


$("#btn-registro").click(function(){
   document.location.replace('registro.html')
  });

$("#portafolio").click(function(){
  document.location.replace("https://gabycasti.github.io/portafolio/");
})

});