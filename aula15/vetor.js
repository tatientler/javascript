let value = [8, 1, 7, 4, 2, 9]

/*
for(let position = 0; position < value.length; position++) {
    console.log(`A posição ${position} tem o valor ${value[position]}`)
}
*/

for (let position in value) {
    console.log(`A posição ${position} tem o valor ${value[position]}`)
}