// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import {getDatabase, ref, onValue, update, push,child} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA51ITCH7U6lmirGULwuNDvvXaFhZZ5fZY",
    authDomain: "proyectofinal-912f7.firebaseapp.com",
    databaseURL: "https://proyectofinal-912f7-default-rtdb.firebaseio.com",
    projectId: "proyectofinal-912f7",
    storageBucket: "proyectofinal-912f7.appspot.com",
    messagingSenderId: "532402777546",
    appId: "1:532402777546:web:27f1923733d28a4a6b7333",
    measurementId: "G-HVD2BM5K21"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

var btnIniciar = document.getElementById('btnIniciar');
var btnCerrar = document.getElementById('btnCerrar');
var nombreUsuario = document.getElementById('nombreUsuario');
var textoMensaje = document.getElementById('textoMensaje');
var usuarioConectado = "";
var divChat = document.getElementById('divChat');

btnIniciar.onclick = async function (){
    var auth = getAuth();
    var provider = new GoogleAuthProvider();
    auth.language = 'es';
    var response = await signInWithPopup(auth, provider);
    nombreUsuario.innerText = response.user.email;
    usuarioConectado = response.user.email;
    btnIniciar.style.display = "none";
    btnCerrar.style.display = "flex";
    escucharYDibujarMensajes();
}

btnCerrar.onclick = async function (){
    var auth = getAuth();
    await auth.signOut();
    btnIniciar.style.display = "flex";
    btnCerrar.style.display = "none";
    nombreUsuario.innerText= "No autentificado"
    usuarioConectado = "";
}

textoMensaje.onkeydown = async function(evento){
    if(evento.key == "Enter"){
       if(usuarioConectado == ""){
        alert("Debes haber iniciado sesion para escribir");
        return;
       }
       var db = getDatabase()
       var referenciaAMensajes = ref(db, 'mensajes');
       var nuevaLlave = push(child(ref(db), 'mensajes')).key;
       var nuevosDatos = {
       [nuevaLlave]: {
            usuario: usuarioConectado,
            mensaje: textoMensaje.value,
            fecha: new Date()
            }
       }
       textoMensaje.value = ""
       await update(referenciaAMensajes, nuevosDatos)
       
    }
}
function escucharYDibujarMensajes (){
    //Recuperamos la base de datos de Firebase
    var db = getDatabase();
    //Creamos la referencia al mensaje.
    var referenciaAMensajes = ref(db, 'mensajes');
    //Escuchamos cuando hay nuevos mensajes
    onValue(referenciaAMensajes, (datos)=>{
         var valores = datos.val();
         divChat.innerHTML = "";
         Object.keys(valores).forEach(function(llave){
             divChat.innerHTML += "<div class='usuario'>"+ valores[llave].usuario + "</div>";
             divChat.innerHTML += "<div class='mensaje'>"+ valores[llave].mensaje + "</div>";
             divChat.innerHTML += "<div class='fecha'>"+ valores[llave].fecha + "</div>";
             divChat.innerHTML += "<hr>"
         })
         divChat.scrollTo(0, divChat.scrollHeight)
    },
    (error)=>{
     console.log(error)
    }
    )
 }

