function myFunction(){
    let input, ul, li, a, filtro, i;
    input = document.getElementById("myInput");
    // Todos valores do input estarão em CAPS(UpperCase)
    filtro = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    // Puxa elementos de outra variavel por nome das tags
    li = ul.getElementsByTagName('li');
    console.log(li)
    
    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0]
        // IndexOf() Retorna o primeiro indice em que o elemento pode ser encontrado no Array 
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';    
        }
    }
}