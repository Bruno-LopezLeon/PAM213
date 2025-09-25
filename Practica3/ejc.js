function simularPetionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {

        const respuesta = await simularPetionAPI();
        console.log(respuesta);
    
}

obtenerDatos();

