//Crie um programa que peça ao usuário a idade e o titulo de eleitor, se ele tiver acima de 16 anos e possuitr titulo de eleitor, poderá votar, se alguma das informações estiver faltando, crie um alert() dizendo que ele nao poderá voltar.

let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function Aperte(){
    if(idade.value >= 16 && titulo.value == "sim"){
        alert("Você pode Votar")
    }
    else(
        alert("Você não pode voltar")
    )
}

let minutos;
let preco;

if(minutos < 200){
    preco  = 0.2;
}
else{
    if(minutos >= 400){
        
    }
}