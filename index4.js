// let carrinho = {
//     produtos: [],
//     subtotal: 0,
//     frete: 5,
//     imposto: 0,
//     total: 0
// }

// let produto = {
//     nome: "Caneta",
//     qtd: 2,
//     preco: 2.5
// }

// carrinho.produtos.push({
//     nome: "Caneta",
//     qtd: 2,
//     preco: 2.5
// })

// console.log(carrinho);

let carrinho = {
    produtos: [],
    subtotal: 0,
    frete: 5,
    imposto: 0,
    total: 0
}

function adicionarProduto(nome, qtd, preco) {
    carrinho.produtos.push({nome, qtd, preco})
    exibirCarrinho()
}

function exibirCarrinho() {
    console.log(carrinho);
}

// exibirMsg("Everton")
// exibirMsg("Enzo")
// exibirMsg("Kaue")
