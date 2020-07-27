//variables globales--------------------------------//
var iniciarsesion = document.getElementById("iniciarsesion");  
var salir = document.getElementById("salir");
var registro = document.getElementById("registro");
var labelUsusario = document.getElementById("labelUsuario");

//funciones----------------------------------------//
function registroUsuario() {
   let user = prompt("Registra tu usuario");
   let pass = prompt("Registra tu password");
   localStorage.setItem('usuario', user);
   localStorage.setItem('clave', pass); 
   alert('registro completo')
}
function iniciarsesionusuario() {
    let user = prompt("Escribe tu usuario");
    let pass = prompt("Escribe tu password");


    //buscar datos en el localstorage
    if (user == localStorage.getItem('usuario') && pass == localStorage.getItem('clave') ) {
        alert ("Login exitoso");
        labelUsusario.innerHTML = user;
    } else {
        alert ("error en el login");
    }
}

    //1 - Poner vacia la variable user (usuario)
    //2 - Poner vacio la viariable pass (clave)
    //3 - labelUsuario lo va poner vacio user
function salirSesion() {
    let user = "";
    localStorage.setItem('usuario', user);
    let pass = "";
    localStorage.setItem('clave', pass);
    labelUsusario.innerHTML = user;
}
//usuario en sesion--------------------

if (localStorage.getItem('user')) {
    let usuario = localStorage.getItem('user');
    labelUsusario.innerHTML = usuario.localStorage;
}
    


/**
 * on cliks
 */
iniciarsesion.onclick = function() {
    iniciarsesionusuario(); 
}
salir.onclick = function() {
    salirSesion();
    //funcion para salir
}
registro.onclick = function() {
    registroUsuario();
}
