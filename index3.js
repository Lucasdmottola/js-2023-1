// let produto1 = "Caneta"
// let preco1 = 2.5
// let qtd1 = 2

// console.log(produto1,preco1,qtd1);


// let produto2  = "Lapis"
// let preco2 = 1.0
// let qtd2 = 10

// console.log(produto2,preco2,qtd2);

// let produtos = [
//     "Caneta",
//     "Lapis",
//     "Borracha"
// ]

// let produto1 = [
//     "Caneta",
//     2.5,
//     2
// ]

// let produto2 = [
//     "Lapis",
//     1.5,
//     10
// ]

// ["Caneta", 2.5, 2],
// ["Lapis", 1.5, 10],
// ["Borracha", 0.75, 12]



// console.log(produtos);

// produtos.push(["Caneta", 2.5, 2])

// console.log(produtos);

// produtos.push(["Lapis", 1.5, 10])

// console.log(produtos);

// let produtos = []

// for (let index = 0; index < 5; index++) {

//     let nome = prompt("Nome do produto")
//     let preco = prompt("Preço do produto")
//     let qtd = prompt("Qtd do produto")

//     let produto = [
//         nome,
//         preco,
//         qtd
//     ]

//     produtos.push(nome)

// }

// console.log(produtos);

// let usuarios = []


// Adicionar um elemento no final do array
// usuarios.push("Danielle")

// console.log(usuarios);

// Remove o ultimo elemento
// usuarios.pop()

// Remove o primeiro elemento
// usuarios.shift()

// Adiciona um elemento no primeiro index do array
// usuarios.unshift("Sanderson")

// console.log(usuarios)

// Primeira questão da atividade
// let numeros = []

// for (let index = 0; index < 5; index++) {
//     let num = prompt("Digite seu numero: ")
//     numeros.push(num)
// }

// console.log(numeros);

// Segunda questão
// for (let index = 0; index < numeros.length; index++) {
//     console.log(numeros[index]);
// }

// let produto = [
//     "Caneta",
//     2.5,
//     10
// ]

// produto[1] = 2

// produto.push(produto[1] * produto[2])

// console.log(produto);

// produto.pop()

// console.log(produto);

// OBJETOS

// let usuarios = []

// let usuario = {
//     nome: "Allan",
//     idade: 23,
//     sexo: "M",
//     CNH: true
// }

// usuarios.push(usuario)

// usuario = {
//     nome: "Everton",
//     idade: 25,
//     sexo: "M",
//     CNH: false
// }

// console.log(usuario.nome);

// usuarios.push(usuario)

// console.log(usuarios[1].nome);


// let produtos = []

// let produto = {
//     nome: "Caneta",
//     preco: 2.5,
//     qtd: 10
// }

// produtos.push(produto)

// produtos[0].total = produtos[0].preco * produtos[0].qtd

// console.log(produtos);

// delete produtos[0].total

// console.log(produtos);

// let pessoas = {
//     info: [
//         {
//             nome: "Everton",
//             idade: 25,
//             CNH: true
//         },
//         {
//             nome: "Gabe",
//             idade: 24,
//             CNH: false
//         },
//         {
//             nome: "Joao",
//             idade: 27,
//             CNH: true
//         }
//     ]
// }

// for (let index = 0; index < pessoas.info.length; index++) {
    
//     console.log(pessoas.info[index].nome);

// }




// console.log(pessoas);

let produtos = [
    {
        nome: "Caneta",
        fabricante: "Bic"
    },
    {
        nome: "Lapis",
        fabricante: "Faber"
    }
]

console.log(produtos);

// for (let index = 0; index < produtos.length; index++) {
    
//     console.log(produtos[index].fabricante);

//     delete produtos[index].fabricante
    
// }

delete produtos[1].fabricante

for (let index = 0; index < produtos.length; index++) {
    
    console.log(produtos[index].fabricante || "Não existe");

}

console.log(produtos);