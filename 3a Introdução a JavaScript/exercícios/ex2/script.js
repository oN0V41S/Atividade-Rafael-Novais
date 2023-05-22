var dolar = document.getElementById("dolar")
var real = document.getElementById("real")
var real = document.getElementById("real")
var calc;

function converter(){
    calc = parseInt(dolar.value) * 4.90;
    real.innerHTML = calc;
}