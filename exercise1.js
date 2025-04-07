"use strict"

let add = (a, b) => a + b

let random = () => Math.random * 100

class Person {
    constructor(name){
        this.name = name
    }

    greet = () => { console.log(`Hola, ${this.name}`)}
}

const person = new Person ('Irene')
person.greet()