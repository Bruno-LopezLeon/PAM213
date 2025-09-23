const persona = {
    nombre: 'bruno',
    edad: 19,
    direccion: {
        ciudad: 'Qro',
        pais: 'Mexico'
    }
};
const {nombre, edad, direccion: {ciudad, pais} } = persona;
console.log("Me llamo "+ nombre + ", tengo "+edad+" y vivo en "+ciudad);