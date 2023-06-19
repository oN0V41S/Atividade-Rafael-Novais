//Eventos
/* No JavScript, eventos são ações ou ocorrências que acontecem na página web que estamos implementando . Esses eventos geralmente invocam funções que irã executasr as operções desejadas. Exemplo de eventos são: o usuário clica em um botão na página. */

/*Exemplos de eventos:
- Clicar no mouse;
- Quando a página é carregada
- Quando uma imagem foi carregada
- Quando o mouse passa sobre o elemento
- Quando um formulário HTML é enviado. */

let abc = document.getElementById("abc")
function mudar(){
    abc.innerHTML = 'São os alunos de Santo Amaro S2'
}

let  dataDeHoje = document.getElementById("demo")
function Data(){
    dataDeHoje.innerHTML = Date();
}

function carregarAviso(){
    alert('Você acessou a página')
}

let obj = document.getElementById("obj")
function mudarDeFrase(){
    obj.innerHTML = 'Obrigado!'
}

function voltarAFrase(){
    obj.innerHTML = 'Passe o mouse Aqui!'
}