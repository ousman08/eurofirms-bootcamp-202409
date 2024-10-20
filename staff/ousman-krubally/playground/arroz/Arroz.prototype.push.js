var Arroz = function () { this.length = 0 }

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var elements = arguments[i]

        this[this.length] = elements
        this.length++ //this.length = this,length + 1
    }

    return this.length
}

console.log('TEST Arroz.prototype.push')

console.log('CASE add 400 to nums')

var nums = new Arroz
nums[0] = 100
nums[1] = 200
nums[3] = 300
nums.length = 3

var length = nums.push(400)
console.log(nums)