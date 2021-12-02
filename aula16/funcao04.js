function fatorial(parametro) {
    let fat = 1
    for (let c = parametro; c > 1; c--) {
        fat *= c
    }
    return fat
}

function fat(par) {   //teste
    let mult = 1
    let string = `${par}! = `
    for (let c = par; c > 1; c--) {
        mult *=c
        string += `${c} x `
    }
    return string += `1 = ${mult}`
}

console.log(fatorial(5))
console.log(fat(7))