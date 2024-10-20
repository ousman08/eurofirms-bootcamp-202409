var Arroz = function () { this.length = 0 }

Arroz.prototype.pop = function () {
    /*
    extract last element from arroz (reference in a local variable)
    delete last element from arroz
    decrement arroz length by 1
    return extracted element
    */

    var last = this[this.length -1]
    delete this[this.length - 1]
    this.length-- //thist.length = thist.length -1
    return last 
}

console.log('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = ' kale'
plants[4] = 'tomato'
plants.lengts = 5