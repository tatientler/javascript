var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade <16) {
    console.log(`Você ainda não vota`)
} else if (idade >=16 && idade <18 || idade >65) {
        console.log(`Seu voto é opcional`)
} else {
    console.log(`Seu voto é obrigatório`)
}