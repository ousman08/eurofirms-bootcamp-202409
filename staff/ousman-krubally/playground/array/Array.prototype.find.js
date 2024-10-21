console.log('TEST Array.prototype.find')


/* 
El método find en JavaScript recorre un array y devuelve el primer elemento que cumple con la 
condición especificada en una función. Si ningún elemento cumple la condición, devuelve undefined.
*/


console.log('CASE: Find the first numbers less than 20 in the array')

// Declaramos un array de números
var numbers = [6, 15, 32, 8, 58, 200];

// Usamos find para buscar el primer número menor que 20
var found = numbers.find(function(element){  
    return element < 20;   //Al encontrarlo, lo guardamos en la variable found
})

console.log(found); // Imprimirá 6 ya que es menor que 20    


console.log('CASE: Find a name called "boksin"')

var persona = [

    { name: 'MLD', age: 25 },
    { name: 'bintu', age: 21 },
    { name: 'boksing', age: 57 },
    { name: 'luqman', age: 0 },
    { name: 'Anastasia', age: 49 },
    { name: 'Youname', age: 108}
    
]

// Usamos find para buscar a la persona cuyo nombre es 'boksing'
var foundPerson = persona.find(function(friend) {
    return friend.name === 'boksing';
})

console.log(foundPerson)
// {name: boksing age: 57}


console.log('CASO: I need to print "luqman"')

var hermano = persona.find(function(el){
    return el.age == 0; 
})

console.log(hermano)
// {name: Luqman: age: 0}