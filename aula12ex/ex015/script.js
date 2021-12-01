function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //formulário ano - info que foi preenchida pelo usuário
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'littleboy.png')
            } else if (idade >=12 && idade <21) {
                //Adolescente / Jovem
                img.setAttribute('src', 'teenagerboy.png')
            } else if (idade >=21 && idade <60) {
                //Adulto
                img.setAttribute('src', 'man.png')
            } else {
                //Idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'littlegirl.png')
            } else if (idade >=12 && idade <21) {
                //Adolescente / Jovem
                img.setAttribute('src', 'teenagergirl.png')
            } else if (idade >=21 && idade <60) {
                //Adulto
                img.setAttribute('src', 'woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
