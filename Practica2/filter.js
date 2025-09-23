const productos = [
    {nombre: 'Mouse', precio: 700},
    {nombre: 'Laptop', precio: 2500},
    {nombre: 'Libro', precio: 320},
    {nombre: 'Monitor', precio: 10000},
];

let f = productos.filter(producto => producto.precio > 1000);

let n = f.map(producto => producto.nombre);

console.log(productos);
console.log(n);