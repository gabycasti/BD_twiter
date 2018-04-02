var foto= '';
var nombre = '';
var nick = '';

$(document).ready(function(){
  // Habilitarlo a través de la página de firebase en el link autenticación
  // Habilitar al final donde dice anónimo
// realizamos la autenticación anónima (debe estar activada en la consola de Firebase)
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Detectado error de autenticación', error);
    });

  // asociamos el manejador de eventos sobre el INPUT FILE
    document.getElementById('foto').addEventListener('change', function(evento){
    evento.preventDefault();
    //Obteniendo el nick del input del formulario
    var nickName = $("#nick").val();
    //Creando una variable archivo para guardar la foto temporalmente
    var archivo  = evento.target.files[0];
    //Subir archivo con la foto y el nombre del usuario
    subirArchivo(archivo,nickName);
  });




  // Rescatar información del formulario crear perfil
  $('#btn-registro').click(function(){
var expresion= /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
// haciendo referencia a el campo usuarios de la base de datos
    var usuarios = db.ref('usuarios');
      var nombre = $('#nombre').val();
      var nick = $('#nick').val();
      var correo = $('#correo').val();
      var clave = $('#clave').val();

   // Creo un objeto para almacenar los datos de un usuario

  //var password2 = $('#password2').val();
  // Creo un objeto para almacenar los datos de un usuario
      var usuario = new Object();
      usuario.nick=nick;
      usuario.nombre=nombre;
      usuario.correo = correo;
      usuario.clave= clave;
      usuario.foto=foto;

//Validando los campos de registro
/* El metodo .test nos valida si se cumple o no la expresión regular
    * En este caso lo esta negando es decir si no se cumple
    * Me retorna un valor booleano verdadero o false      
    */
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
            if(correo == '' || !expresion.test(correo)){
              $('#mensaje_correo' ).fadeIn();
               return false;
        }else{
            $('#mensaje_correo').fadeOut();
            if(clave == ''){
                $("#mensaje_clave").fadeIn();
                 return false;
        }else{
           $('#mensaje_clave').fadeOut();
          if(foto == ""){
            $("#mensaje_foto").fadeIn();
                 return false;
          }
        }
       }
      }
    }

  
//Llamo al campo referencia de usuarios de la base de datos que es nick 
// Guardo con set el objeto usuario con todos los datos de los usuarios
//llamo al campo referencia de usuarios de la base de datos que es nick 
// guardo con set el objeto usuario con todos los datos de los usuarios
    //  usuarios.child(nick).set(usuario);


      usuarios.child(nick).set(usuario);
      sessionStorage['usuarioLogueado'] = nick;
      alert('usuarios registrado con exito')
      document.location.replace('twits.html')
      //cargaDatos();
    })


$("#nombre").keypress(function(){
     $('#mensaje_nombre').hide();
  });
  


$("#nick").keypress(function(){
     $('#mensaje_nick').hide();
  });

$("#correo").keypress(function(){
     $('#mensaje_correo').hide();
  });

$("#clave").keypress(function(){
     $('#mensaje_clave').hide();
  });

$("#foto").click(function(){
     $('#mensaje_foto').hide();
  });
  
});

// función que se encargará de subir el archivo
    function subirArchivo(archivo, nick) {
      // creo una referencia/ruta/carpeta/repositorio al lugar donde guardaremos el archivo
      var rutaServer = dbFotos.ref('foto_perfil').child(nick);
      // Comienzo la tarea de upload/Subiendo la foto
      var uploadTask = rutaServer.put(archivo);
      // defino un evento para saber qué pasa con ese upload iniciado
      uploadTask.on('state_changed', null,
        function(error){
          console.log('Error al subir el archivo', error);
        },
        function(){
          //mensajeFinalizado(uploadTask.snapshot.downloadURL, uploadTask.snapshot.totalBytes);
          //Guardo la ruta donde quedo registrada la foto en el servidor
          //snapshot.downloadURL es el equivalente a ss recasta la foto
          foto = uploadTask.snapshot.downloadURL
          console.log('Subida completada: '+foto);
          
        }
      );
    }

