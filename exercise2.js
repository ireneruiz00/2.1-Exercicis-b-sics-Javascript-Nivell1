"use strict"
const resultDiv = document.getElementById('result')

function canDrive (age) {
    let message = age >= 18 ? 'Pots conduir' : 'No pots conduir' 
    return message
}

let age = 18
console.log(canDrive(age))

function biggerNum() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let message = ''
    
    message = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran'
    
    resultDiv.innerHTML = message
}