"use strict"
function process (number, myCallback) {
    return myCallback(number)
}


function calculator (num1, num2, callback) {
    return callback(num1,num2)
}

function suma(x, y) {
    return x + y
}

console.log(calculator(5, 6, suma))
