console.log('TEST Array.prototype.includes.js')

console.log('CASE check cars includes ferrari')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE checkcars cars includes lambo from index 1')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lambo, 1')
console.log(contains)
// false

//TODO add negative offset test case

console.log('CASE checkcars cars inludes m5 from -1')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('m5, -1')
console.log(contains)
// true