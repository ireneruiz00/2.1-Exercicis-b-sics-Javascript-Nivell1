"use strict"

const names = ['Anna', 'Bernat', 'Clara']

names.forEach(name => console.log(name))

for(let x of names) {
    console.log(x)
}

const nums = [1, 2, 3, 4, 5, 6]

let numsParells = nums.filter(num => num % 2 === 0)

console.log(numsParells)