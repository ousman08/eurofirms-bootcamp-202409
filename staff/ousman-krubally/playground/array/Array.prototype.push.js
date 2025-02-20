console.log('TEST Array.prototype.push')

// El metodo push añade al final del array y el metodo vuelve el nuevo array

console.log('CASE and 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400) 
console.log(nums)
// [100, 200, 300 400] (4)
console.log(length) 
//4

console.log('CASE and f to chars')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')
console.log(chars)
// ['A', 'B', 'C', 'D', 'E', 'F'] (6)
console.log(length)
// 6

console.log('Case add many elements in one call')

// 
var colors = ['red', 'green', 'blue', 'magenta']
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
//['red', 'green', 'blue', 'magneta', 'cyan', 'yellow', 'orange', 'pink']
console.log(length)
//8

console.log('Money i have and more i earn')

const money = ['100', '500', '50',]
const added = money.push('1000', '500')
console.log(money)
// se espera: [100, 500, 50, 1000, 500]
console.log(added)
// se espera: 5