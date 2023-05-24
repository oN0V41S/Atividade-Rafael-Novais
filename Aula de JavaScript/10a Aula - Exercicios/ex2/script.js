let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let operador = document.getElementById("operador");
let print = document.getElementById("print");

let soma;

function calcule(){
    switch(operador.value){
        case "+":
            soma =  parseInt(n1.value) + parseInt(n2.value);
            print.innerHTML = "Sua Soma é : " + soma;
        break;

        case "-":
            soma =  parseInt(n1.value) - parseInt(n2.value);
            print.innerHTML = "Sua Soma é : " + soma;
        break;

        case "/":
            soma =  parseInt(n1.value) / parseInt(n2.value);
            print.innerHTML = "Sua Soma é : " + soma;
        break;

        case "*":
            soma =  parseInt(n1.value) * parseInt(n2.value);
            print.innerHTML = "Sua Soma é : " + soma;
        break;

        default:
            print.innerHTML = "Adicione Números e o operador."
    }
}

