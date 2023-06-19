let base = document.getElementById("n1")
let altura = document.getElementById("n2")
let res1;
let resultado = document.getElementById("resultado")
let btn = document.getElementById("btn")

btn.addEventListener('click', calculo)
function calculo(){
    mult = (base.value * altura.value)/2;
    resultado.innerHTML = mult;

}