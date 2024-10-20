
console.log('TEST Array.prototype.forEach')






console.log('CASE alter on numbers');

var numbers = [1, 2, 3, 4, 4, 5, 8];

// recorre los numeros e imprime cada uno 

numbers.forEach(function(elemento, index) {
    console.log('index', index, 'value:', elemento,)
});

// función que suma 2 a cada número en el array
var sum2 = function (numbers) {
    numbers.forEach(function(elemento, index) {
        numbers[index] = elemento + 2;
    });
}

// llama a la funcion y modifica el array original 
sum2(numbers);
console.log('numbers after adding 2:', numbers);







console.log('CASE cars')

var cars = ['ford', 'buagti', 'volvo', 'seat', 'benz'];

// recorre en los valorez  solo imprimiendo lo 1 vez 
cars.forEach(function(car, index) {

    console.log(`${index}: ${car}`);
});




console.log('CASE people')

var people = [
    {
        name: 'mld', 
        age: 24,
        origin: 'dubai'
    },
    {
        name: 'maha',
        age: 25,
        origin: 'spain'
    },
    {
        name: 'mari',
        age: 34,
        origin: 'oman',
    },
    {
        name: 'pretty',
        age: 30,
        origin: 'japon'
    }
]




console.log('CASE get the name')

people.forEach(function(element) {
    console.log(element.name);
});



console.log('CASE get name, age and origin')

people.forEach(function(name, age, origin) {
    console.log(people);
});


