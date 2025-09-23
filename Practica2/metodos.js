let persona = [
    {nombre: 'ana', edad: 19},
    {nombre: 'luis', edad: 21},
    {nombre: 'juan', edad: 25},
]
let L = persona.find(p => p.nombre == 'luis');
persona.forEach(p =>  console.log("Me llamo "+ p.nombre +" y tengo " + p.edad ));
let r = persona.reduce((a,b) => a + b.edad, 0);
console.log(L);
console.log(r);