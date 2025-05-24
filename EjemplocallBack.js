
//Obtner suario recibe como parametro otra funcion llamda callback//
function obtenerDatos(callback) {
    //setTimeout simual una espera en milissegundos 1500
    setTimeout(() => {
        callback("Datos obtenidos...");
    }, 1500);
    //despues de los 1500 mls se ejecuta el callback
}

//funcion mostrarMensaje() se va a ejecutar dentro del callback despues de los 1500mls
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

//llamamois la funcion obtenerDatos(argumento = mostrarMensaje) 
// mostrarMensaje es un callback que se ejecuta cuandi termina steTimeout
obtenerDatos(mostrarMensaje);


function obtenerSuma(callback){
    setTimeout(()=>{
        callback(2+1);
    },2000)
}

function mostrarSuma(suma){
    console.log(suma)
}

obtenerSuma(mostrarSuma);