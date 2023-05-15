var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");
var soma ;


function soma(){
    // Manipulando as variaveis como valor
    soma = parseInt(n1.value) + parseInt(n2.value);
    // "parseInt" puxa a variavel int(numero inteiro) do elemento

    // Manipulando o resultado como editavel
    resultado.innerHTML = soma;
}