//async indica que esta funcion devuelve una promesa automaticamente

async function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(" Datos obtenidos con async/await");
        }, 1500);//1.5s
    });
}


async function mostrarDatos() {
    console.log("Esperando datos...");
    //await pausa la ejecucion hasta que obtenerDatos() termin
    const resultado = await obtenerDatos(); // Espera hasta que la Promesa se cumpla
    console.log(resultado); // Imprime el mensaje después de que la Promesa se cumple
}

//la ejecucion se detiene en await obtenerDatos() hsta que la promesa se resuelva
mostrarDatos();
