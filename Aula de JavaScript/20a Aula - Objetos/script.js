const pessoa = {
    PrimeiroNome: "Brunão",
    SegundoNome: "Ruiz",
    id: 335214,
    // Propriedade com função = Metodo "Fullnome: function(){}"
    FullNome: function(){
        return this.PrimeiroNome + " " + this.SegundoNome;
    }
    // Usar função no console pessoa.FullNome() 
}

    // Vetor 
    let cor = ["Azul", "Vermelho"]

    const tarefas = [
        // Posição 0
        {
            id: 1,
            texto: 'Levar o lixo para fora',
            Completado: true
        },
        // Posição 1
        {
            id: 2,
            texto: 'Encontrar com o Chefe',
            Completado: true
        },
        // Posição 2
        {
            id: 3,
            texto: 'consulta no Dentista',
            Completado: false
        },
    ]
        // Acessar a propriedade do objeto com Vetor tarefas[0].propriedade.
    

    // objeto.forEach() percorre todos vetores do objeto. 
    tarefas.forEach(teste)

    function teste(tarefas)
        {
            console.log(tarefas.texto)
                // Exibe todos os parametros "texto" dentro de tarefas 
        }
    