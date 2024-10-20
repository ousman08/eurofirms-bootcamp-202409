console.log('TEST Araay.prototype.indexOf')

console.log('Case get index of bison')

var beasts = ['ant', 'bison', 'camel', 'duk', 'bison'];
var index = beasts.indexOf('bison')
console.log(index);
// 1

console.log('CASE get index os bison starting at index 2')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('bison', 2)
console.log(index);
// 4

console.log('CASE get index of giraffe')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('giraffe')
console.log(index);
// -1

console.log('CASE get index of duck starting at offset -4')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('duck', -4)
console.log(index);
// 3

console.log('CASE get inddex of duck starting at offset -3')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var beasts = beasts.indexOf('bison', -3)
console.log(index);
// 4