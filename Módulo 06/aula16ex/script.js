let numeroDigitado = document.getElementById('txtn')
let seletor = document.getElementById('seletor')
let finalizar = document.getElementById('fim')
let lista = []

function adicionar() {
    let numero = Number(numeroDigitado.value)
    if (numero <= 0 || numero > 100) {
        window.alert('[ERRO] O valor digitado está fora dos parâmetros!')
    } else if (lista.indexOf(numero) >= 0) {
        window.alert('[ERRO] O valor digitado já foi informado!')
    } else {
        let option = document.createElement('option')
        option.text = `Valor ${numero} adicionado.`
        seletor.appendChild(option)
        lista.push(numero)
        finalizar.innerHTML = ''
    }
    numeroDigitado.value = ''
    numeroDigitado.focus()
} 

function total() {
    let menor = lista[0]
    let maior = lista[0]
    let soma = 0
    let media = 0

    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
    
    for (let contador = 0; contador < lista.length; contador++) {
        if (menor > lista[contador]) {
            menor = lista[contador]
        } 
        
        soma += lista[contador]
        
        if (maior < lista[contador]) {
            maior = lista[contador]
        }
    }

    media = soma / lista.length

    finalizar.innerHTML = ''
    finalizar.innerHTML += `Tem ${lista.length} números na lista. <br> O menor número é ${menor}. <br> O maior número é ${maior}.<br> A soma desses valores é ${soma}. <br> A média deles é de ${media}.`
        
    }
