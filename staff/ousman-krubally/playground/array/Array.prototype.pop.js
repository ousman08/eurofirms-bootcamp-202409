console.log('TEST Array.prototype.pop')

// El metodo pop elimina el ultimo elemento de un array y lo devuelve al metodo, asi cambia la longitud

console.log('CASE extract tomato from plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop()
console.log(plants)
// ['broccoli', 'cauliflower', 'cabbage', 'kale']
console.log(plant)
// tomato

console.log('CASE etracte last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'puma', size: 44, price: 50 }
var cart = [socks, tshirt, shoes]
var extracted = cart.pop()
console.log(cart)
/*
[
   {brand: 'Adidas', size: 'L', price:10},
   { brand: 'Nike', size: 'l', price: 20}
]
*/
console.log(extracted)
// { brand: 'Puma', size: 44, price: 50}  



console.log('The money i have and what i spend')

const money = ['100', '20', '5000', '500', '10']
const portfolio = money.pop()
 
console.log(money)
//se espera: ['100', '20', '5000', '500']
console.log(portfolio)
//se espera: 10