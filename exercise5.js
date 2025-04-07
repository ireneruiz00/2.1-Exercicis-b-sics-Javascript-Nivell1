"use strict"
const numbers = [1, 2, 3, 4]

const square = numbers.map(number => Math.sqrt(number))



const parells = numbers.filter(number => number % 2 === 0)



const numbers2 = [1, 10, 8, 11]

const findNum = numbers2.find(number => number > 10)



const numbers3 = [13, 7, 8, 21]

const sumaReduce = numbers3.reduce((total, number) => total + number)

