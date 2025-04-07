"use strict"

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]

console.log(array3)

function suma (...numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}