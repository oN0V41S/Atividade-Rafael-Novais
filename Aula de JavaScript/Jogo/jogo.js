let VidaHeroi;
let AtaqueHeroi;
let XPHeroi;
let NivelHeroi;
let ClassesDosHerois = ["Mago", "Ninja", "Vinking"]
let NomeDoHeroi;
let MensagemDoNome;

NomeDoHeroi = document.getElementById("NomeDoHeroi");
MensagemDoNome = document.getElementById("Mensagem");

function Enviar(){
    if(NomeDoHeroi.value != ""){

        MensagemDoNome.innerHTML = "olá " + NomeDoHeroi.value + ", Seja Bem vindo ao jogo";
    }

}