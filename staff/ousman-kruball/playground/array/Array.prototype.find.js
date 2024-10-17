console.log('TEST Array.prototype.find')


console.log('CASE: Find the first numbers less than 20 in the array')

// Declaramos un array de números
var numbers = [6, 15, 32, 8, 58, 200];

// Usamos find para buscar el primer número menor que 20
var found = numbers.find(function(element){  
    return element < 20;   //Al encontrarlo, lo guardamos en la variable found
})

console.log(found); // Imprimirá 6 ya que es menor que 20    