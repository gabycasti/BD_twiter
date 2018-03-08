var foto= '';
var nombre = '';
var nick = '';
$(document).ready(function(){
   cargaDatos();

   
// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Detectado error de autenticación', error);
    });



});


function cargaDatos(){
       //console.log("Usuario: "+sessionStorage['usuarioLogueado']) 

        var usuarios = db.ref('usuarios');
        usuarios.on('value',function(ss){
          var usuario = ss.val();
          var indice=0;
          usr = Object.keys(usuario);
                for(i=0; i<usr.length; i++){
                  if(usr[i] == sessionStorage['usuarioLogueado'])
                  {
                      indice = i;
                  } 
                }

             
                $('#nick').text(usuario[usr[indice]].nick);
                $('#foto_perfil').attr('src',usuario[usr[indice]].foto)
                $('#nombre_usuario').text(usuario[usr[indice]].nombre);
                foto = usuario[usr[indice]].foto;
                nombre = usuario[usr[indice]].nombre;
                nick = usuario[usr[indice]].nick;
          })
    }