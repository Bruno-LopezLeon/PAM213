document.write("<h1>Hola mundo</h1>"); // Escribir en el HTML
alert("Hola mundo"); // Mensaje emergente
console.log("Este es un mensaje") // console.log para mensajes en la consola
console.log(3)
console.log([4,7,9])//arreglos de un solo tipo de dato
console.log({"username": "bruno",
"score": 777})//objetos listas de valores

 const PI = 3.1416;//Valor constante
 let nombre = "alex";
 let apellido = " lopez";
 nombre_completo = nombre + apellido;
console.log(nombre)
console.log(apellido)
console.log(nombre_completo)

let num_1 = 10;
let num_2 = 30;

let res1 = num_1 + num_2;
let res2 = num_1 - num_2;
let res3 = num_1 / num_2;
let res4 = num_1 * num_2;
let res5 = num_1 < num_2;
console.log([res1, res2, res3, res4, res5])

let password = "66666";

let input = "98765";

let res6 = password == input;
//es condicional con if else y switch
if (res6 == true){
    console.log("Acceso concedido")
}else if (password == "66666") {
    console.log("Acceso especial")
} 
else {
    console.log("Acceso denegado")
}
//el switch es otra forma de hacer condicionales con casos
switch (password) {
    case true:
        console.log("Acceso concedido");
        break;
    case "66666":
        console.log("Acceso especial");
        break;
    default:
        console.log("Acceso denegado");
}

let i = 30;
while (i > 0) {
    document.write("" + i + "-");
    i--;
}

let peliculas = ["Forrest Gump", "Whiplash", "Inception", "Interstellar"];
for (let i = 0; i < peliculas.length; i++) {
    document.write("<h3>" + peliculas[i] + "</h3>");
}

for (let j = 30; j > 0; j--) {
    document.write("" + j + "-");
}
// while y for son bucles para hacer repeticiones

// funciones sirven para reutilizar codigo
// funciones reciben parametros y retornan valores

let nomb
function saludar(nomb) {
    document.write("<h1>Hola " + nomb + "</h1>");
    return nomb;
}
saludar('bruno');
saludar('kayla');

function sumar(n1, n2) {
    res7 = n1 + n2;
    document.write("<h3> la suma de "+n1+"+"+n2+"=" + res7 + "</h3>");
    return res7;
}
sumar(10, 20);
sumar(30, 50);
