function obtenerDatos() {
    //dos funciones resolve-> Se llama cuando la promesa se cumple
    // reject ->Se usa cuando hay un error
    return new Promise((resolve, reject) => {
        //tiempo espera 1500 mls o 1.5 s
        setTimeout(() => {
            resolve("Datos obtenidos con Promesa");
        }, 1500); // 1.5 segundos
    });
}

//.then() metodo que recibe el resultado de la Promesa, espera hasta que la promesa 
// se complete con resolve()
//mensaje es el valor que devuelve resolve()
obtenerDatos().then((mensaje) => {
    console.log(mensaje);
});


//Si falla la Promesa

function obtenerDatosError(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error= true; //simulamos errro
            if (error) {
                reject("Error DAtos");
            }else{
                resolve("Exito Datos");
            }
        },1500);
    })
}

obtenerDatosError().then((resultado)=>{
    console.log(resultado)
}).catch((error)=>{
    console.log(error)
})