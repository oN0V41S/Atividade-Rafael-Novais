class NomeClasse {
    // Ou public void main 
    constructor(){

    }
}

class carro{
    constructor(nome, ano){
        // this. declara a variavel publica no codigo 
        this.nome = nome;
        this.ano = ano;
    }
}

// Criando uma variavel com os parametros de um carro 
let meuCarro1 = new carro ('Ford', 2023);
let meuCarro2 = new carro ('Fusca', 2019);