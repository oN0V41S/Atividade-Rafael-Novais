// Variáveis Unidimensionais
    // Podemos Criar Vetores assim:
    const num1 = new Array
    (30,-1,5,3,121)

    // Ou podemos fazer:
    const num2 = [-2,4,16,111,33,64];



    console.log(num1)
    console.log(num2)

    // Acessando Elementos dos Arrays

    console.log(`primeiro elemento de num1: ${num1[0]}`)
        // "${}" adiciona uma variável na string ''
    console.log(num2[0])

    // Acesse terceiro Elemento de num1
    console.log(num1[2])

    // Acesse o quinto elemento de num2
    console.log(num2[4]) 

    console.log(num1[0] + num1[1])

// Arrays Bidimensionais
console.clear;

const matrix = [
    ['banana', 'Maçã', 'Pera'],
    ['Laranja', true, 1],
    [null, "Uva", -350],
];

console.log(matrix);
console.log(matrix[0]);
    // Acessa Apenas a Linha
console.log(matrix[0][1])
    // Acessa a Linha e a Coluna
console.clear;

    // Alterar um Valor

    let moedas = ['real', 'Dólar', 'coroa', 'peso']
    console.log(moedas);
    moedas[1] = 'Yen';
    console.log(moedas);

    console.clear();
    // let matrix2 = [
    //     [1,2,3]
    //     [4,5.6]
    // ]

    // matrix2[0][1] = 10;
    // console.log(matrix2[0][1])

    // Tamanho de Arrays
    let vetor = [0,1,2,3,4]
    console.log(vetor.length);

// Remover ou Inserir elementos
// Pop() <- Inserir
console.clear();
const frutas = ["laranja", "banana", "manga"];
let x = frutas.pop("manga")
    // Remove "manga" do Array
console.log(frutas)
console.log(x)

// Shift <- remove o primeiro
let y = frutas.shift()
console.log(frutas);

// Delete <- remove qualquer um
const veiculos = ["carros", "barco", "moto"]

delete veiculos[1];
// Deleta o Valor de veiculos[1]
console.log(veiculos);

let z = veiculos.push("aviao");
console.log(veiculos);