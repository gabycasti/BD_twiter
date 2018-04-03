
var expresion= /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){

    /* El metodo .test nos valida si se cumple o no la expresión regular
    * En este caso lo esta negando es decir si no se cumple
    * Me retorna un valor booleano verdadero o false      
    */
     $('#btn-registro').click(function(){
        var nombre = $('#nombre').val();
        var nick = $('#nick').val();
        var email = $('#correo').val();
        var clave = $('#clave').val();
      

        if(nombre == ''){
           $('#mensaje_nombre').fadeIn();
           return false;
        }else{
            $('#mensaje_nombre').fadeOut();
            if(nick == ''){
                $("#mensaje_nick").fadeIn();
                 return false;
        }else{
            $('#mensaje_nick').fadeOut();
            if(email == '' || !expresion.test(email)){
              $('#mensaje_correo' ).fadeIn();
               return false;
        }else{
            $('#mensaje_correo').fadeOut();
            if(clave == ''){
                $("#mensaje_clave").fadeIn();
                 return false;
        }
       }
      }
    }
       document.location.replace('twits.html')
   });


});

