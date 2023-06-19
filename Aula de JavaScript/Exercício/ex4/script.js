let nome = document.getElementById("inNome")
let html = document.getElementById("notaHTML")
let js = document.getElementById("notaJS")
let css = document.getElementById("notaCSS")
let res = document.getElementById("res")
let vali = document.getElementById("verify")
let soma;
let divisao;

function calculo(){
    soma = parseInt(html.value) + parseInt(js.value) + parseInt(css.value)
    divisao = parseInt(soma) / 4
    res.innerHTML = nome.value + " Sua nota é " + divisao;

    if(divisao >= 7){
        vali.innerHTML = "Voce foi Aprovado, Parabéns!"
    }else(
        vali.innerHTML = "Você não foi Aprovado."
    )
}