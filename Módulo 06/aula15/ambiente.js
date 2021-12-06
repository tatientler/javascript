let num = [5, 2, 9, 3]
num[4] = 6
num.push(7)
num.sort()  // coloca o vetor em ordem

console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)