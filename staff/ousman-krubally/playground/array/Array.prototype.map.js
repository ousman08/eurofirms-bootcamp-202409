console.log('TEST Array.prototype.map');

/*El método map devuelve un nuevo array, devolviendo el array 
multiplicado a lo que se le indica a la funcion */





console.log('CASO: voy a devolver el valor multiplicado de number');

// Array original
var number = [1, 8, 27, 44, 66];

// Aplicamos el método map para multiplicar cada valor del array por 2
var numero = number.map(function(valor) {
    return valor * 2;
});

console.log(numero); // resultado esperado [ 2, 16,, 54, 88, 132 ]





console.log('CASE: Modificar un array de objetos para devolver el triple de la edad de cada persona');

var people = [
    {name: 'guapo', age: 63 },
    {name: 'fuerte', age: 149 },
    {name: 'pdre', age: 930 },
    {name: 'hermosa', age: 288},
    {name: 'paciente', age: 33 },
    {name: 'madre', age: 399},
    {name: 'piadosa', age: 40 }
]
// Usamos map para devolver el triple de la edad de cada persona 
var tripleEdad = people.map(function(freen) {
    return freen.age * 3;
})

console.log(tripleEdad) // Resultado esperado: [189, 447, 2790, 864, 99, 1197, 120]





console.log('CASE: Duplicar la edad de cada persona')
 
var duplicadoEdades = people.map(function(freen) {
    return freen.age + freen.age;
})

console.log(duplicadoEdades); // el cuadrado de cada numero de freen 126, 298, 1860, 576, 99, 66, 798, 80
 




console.log('CASE devolvemos la clave y el valor entre llaves')

var x = [
    {clave: 1, valor: 50 },
    {clave: 2, valor: 40 },
    {clave: 3, valor: 30 },
    {clave: 4, valor: 20 },
    {clave: 5, valor: 10 }
]
// Usamos el map para devolver un nuevo objeto con la clave y el valor entre llaves 
var reform = x.map (function(obj) {
    var c = {};
    c[obj.clave] = obj.valor;
    return c
});
console.log(reform); // Resultado esperado [ { '1': 50 }, { '2': 40 }, { '3': 30 }, { '4': 20 }, { '5': 10 } ]
