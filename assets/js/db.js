// Inicializo Firebase
var usuarioLogueado="";
var rutaFoto=""
var config = {
    apiKey: "AIzaSyAKixYYlq9PAFw0sljESzo6cZitRaTcRrI",
    authDomain: "twiter-4b893.firebaseapp.com",
    databaseURL: "https://twiter-4b893.firebaseio.com",
    projectId: "twiter-4b893",
    storageBucket: "twiter-4b893.appspot.com",
    messagingSenderId: "751461675240"
  };
  firebase.initializeApp(config);
var db = firebase.database();


//Autenticación para hacer uso del storage
var authService = firebase.auth();
//Base de datos de imagenes
var dbFotos = firebase.storage();
