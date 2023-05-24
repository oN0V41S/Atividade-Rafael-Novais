let dia = document.getElementById("dia")
let resultado = document.getElementById("resultado")

function calcule(){

    switch(dia.value){
        case "1":
            resultado.innerHTML = "Este dia não é útil.";
        break;

        case "2":
            resultado.innerHTML = "Este dia é útil.";
        break;

    
        case "3":
            resultado.innerHTML = "Este dia é útil.";
        break;
    
        case "4":
            resultado.innerHTML = "Este dia é útil.";
        break;
    
        case "5":
            resultado.innerHTML = "Este dia é útil.";
        break;
    
        case "6":
            resultado.innerHTML = "Este dia é útil.";
        break;
        
        case "7":
            resultado.innerHTML = "Este dia não é útil.";
        break;

        default:
            resultado.innerHTML = "Este dia não é válido.";
    }

    dia.innerHTML = "";
}