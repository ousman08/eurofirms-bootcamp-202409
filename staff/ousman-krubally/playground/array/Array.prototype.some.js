console.log('TEST Array.prototype.some');
// El método some recorre el array y devuelve true si al menos un elemento cumple con la condición,
// si ningún elemento la cumple, devuelve false.

console.log('CASE: find if exists fruits with the letter M');

// Array de frutas
var fruits = ['Banana', 'Mango', 'Piña', 'Fresa', 'Manzana'];

// Usamos some para verificar si existe una fruta que empieza con la letra "M"
var exists = fruits.some(function(fruit) {
   return fruit.startsWith('M'); // Evaluamos si la fruta empieza con la letra "M"
});

console.log(exists); 
// Debería imprimir true, ya que Mango y Manzana empiezan con 'M'