let numero = document.getElementById("numero");
let resposta = document.getElementById("resposta");

function Aperte(){

    //Condição do switch é o valor do número.
    switch(numero.value){
        case "1":
            resposta.innerHTML = "Você escolheu Maçã";
        break;
        
        case "2":
            resposta.innerHTML = "Você escolheu Pera";
        break;

        case "3":
            resposta.innerHTML = "Você escolheu Manga";
        break;

        default:
            resposta.innerHTML = "nao tem essa parada"
        break;
    }

}