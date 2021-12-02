function calcular() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        var numero = Number(num.value)
        tab.innerHTML= ''
        for (var contador = 0; contador <= 10; contador++ ) {
            var item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
        }
    } 
}