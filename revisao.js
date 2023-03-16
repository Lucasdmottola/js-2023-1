// Tipos de variais Primitivas
// String -> São as variaveis de Texto
// Number -> São as variaveis de Numeros
// Boolean -> São as variaveis de verdadeiro ou falso
// null -> É o tipo nulo
// undefined -> São variaveis não definidas

// Variaveis não primitivas
// Array -> São estruturas de dados
// Object -> São objetos de dados

// Declarações

// var -> Mas antiga e obsoleta
// let -> A atualização do var
// const -> Variavel que o valor não pode ser alterado

// Estruturas de decisão basica 

// Operadores logicos
// = -> Atribuição
// == -> Compara os valores
// === -> Comparo os valores e o tipo
// < / > -> Comparar os valores
// ! -> Negação de comparação

// let numero = 10

// if (numero == 10) {
//     console.log("Numero igual a 10");
// }

// let numero = "10"

// if (numero === '10') {
//     console.log("Numero igual a 10");
// }

// let numero = 10

// if (numero <= 10) {
//     console.log("Numero menor ou igual a 10");
// }

// let numero = 10

// if (numero >= 10) {
//     console.log("Numero maior ou igual a 10");
// }

// let numero = 8

// if (numero != 10) {
//     console.log("Numero é diferente de 10");
// }

// let numero = 8

// console.log(!(numero != 10));
// console.log(numero != 10);

// console.log(!true);

// let numero = 5
// let nome = "Eduardo"

// if (numero > 5 && nome === "Eduardo") {
//     console.log("Verdade");
// }else{
//     console.log("Falso");
// }

// AND -> && 
// OR -> || 

// if (numero > 5 || nome !== "Eduardo") {
//     console.log("Verdade");
// } else {
//     console.log("Falso");
// }

// let req = {
//     codigo: 1,
//     nome: "Carla"
// }

// switch (req.codigo) {
//     case 1:
//         console.log("Verificando documentos");
//         if (req.nome === "Enzo") {
//             console.log("Nome é Enzo");
//         }
//         break

//     case 2:
//         console.log("Pagamento aprovado");
//         break

//     case 3:
//         console.log("Pagamento negado");
//         break

//     default:
//         console.log("Problemas na empresa de pagamento, entrem em contato.");
//         break
// }

// let produtos = ["Caneta","Lapis","Borracha"]

// for (let index = 0; index < produtos.length; index++) {
//    console.log(produtos[index]); 
// }

// let controle = 0
// while (controle < 5) {

//     console.log(produtos[controle]);

//     controle++
// }

// let controle = 0;
// do {

//     console.log(controle);

//     controle++;
// } while (controle < 10);

// let produtos = ["Caneta","Lapis","Borracha"]

// Inserir novos valores
// produtos.push("Grafite")

// console.log(produtos);

// Remove o ultimo valor
// produtos.pop()

// console.log(produtos);

// produtos.map(produto => {
    // console.log(produto);
// })

// let resulto = produtos.find(produto => produto === "Borracha")
// console.log(resulto);

// let numeros = [15,55,4,8,42,452]
// let resultoFind = numeros.find(numero => numero < 10)

// let resultoFilter = numeros.filter(numero => numero < 10)

// console.log(resultoFind);
// console.log(resultoFilter);

// console.log(produtos);

// let produtos = [
//     {
//         nome: "Caneta",
//         preco: 2
//     },
//     {
//         nome: "Lapis",
//         preco: 3
//     },
//     {
//         nome: "Borracha",
//         preco: 1
//     }
// ]

// let pesquisa = prompt()

// let resultadoFind = produtos.find(produto => produto.nome === pesquisa)

// console.log(resultadoFind);

// let resultoIndexOf = produtos.indexOf(resultadoFind)
// console.log(resultoIndexOf);

// produtos.splice(resultoIndexOf,1)

// console.log(produtos);

// console.log(resultoIndexOf);

// let resultadoProdutos = produtos.slice(resultoIndexOf - 1)
// let resultadoProdutos = produtos.splice(resultoIndexOf,1,)

// console.log(resultadoProdutos);
// console.log(produtos);

class Cursos {
    constructor(paramNome, paramValor, paramAutor){
        this.nome = paramNome
        this.valor = paramValor
        this.autor = paramAutor
        this.modulos = []
    }

    // Metodo de adicionar novos modulos
    adicionarModulo(paramNomeModulo){
        this.modulos.push(paramNomeModulo)
    }

    removerModulo(paramNomeModulo){
        let resultado = this.modulos.indexOf(paramNomeModulo)
        if (resultado != -1) {
            this.modulos.splice(resultado, 1)
        }else{
            console.log("Modulo não encontrado");
        }
    }
}

let novoCurso = new Cursos("JavaScript", 20, "Everton")

novoCurso.adicionarModulo("Variaveis")
novoCurso.adicionarModulo("Condições")
novoCurso.adicionarModulo("Funções")
console.log(novoCurso);
novoCurso.removerModulo("Condiçoes")