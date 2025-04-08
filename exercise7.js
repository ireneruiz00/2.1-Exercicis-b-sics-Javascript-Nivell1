"use strict"

function checkPromise() {
    return new Promise ((resolve) => {
        setTimeout(() => {resolve('Hola, món')}, 2000)
    })
}

checkPromise().then((value) => {
    console.log(value)
})

function checkInput (input) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { input === 'Hola' ? resolve() : reject() }, 2000)
    })
}


async function showPromise() {
    const greeting = await checkPromise()
    console.log(greeting)
}

showPromise()