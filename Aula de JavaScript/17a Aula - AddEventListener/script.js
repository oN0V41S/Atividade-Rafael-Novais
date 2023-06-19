//AddEventListener()
/*elemento.AddEventListener(evento)*/

let botao = document.getElementById("myBtn")

botao.addEventListener('click', mudarAlerta)
function mudarAlerta(){
    alert("Olá Mundo")
}