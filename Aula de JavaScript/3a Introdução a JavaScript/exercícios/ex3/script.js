var metros = document.getElementById("metros");
var centimetros = document.getElementById("centimetros");
var res;

function calc(){
    res = parseInt(metros.value) * 100;
    centimetros.innerHTML = res;
}