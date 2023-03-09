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
    // exibirCarrinho()
}

function exibirCarrinho() {
    console.log(carrinho);
}

function exibirQtd() {
    let qtdItens = 0;

    // for (let index = 0; index < carrinho.produtos.length; index++) {
    //         qtdItens += carrinho.produtos[index].qtd    
    // }

    carrinho.produtos.map(produto => {
        qtdItens += produto.qtd;
        console.log(produto.qtd)
    })

    console.log(qtdItens);
}

function buscarProduto(nomeDoProduto) {

        // Retorna o primeiro objeto que a condição seja True
        let resultado = carrinho.produtos.find(
            produto => produto.nome === nomeDoProduto
        )

        // Retorna todos os objetos que a condição seja True
        // let resultado = carrinho.produtos.filter(
        //     produto => produto.qtd === 13
        // )

        console.log(resultado);
}

function totalPreco() {
    let total = 0

    for (let index = 0; index < carrinho.produtos.length; index++) {
       total += carrinho.produtos[index].qtd * carrinho.produtos[index].preco
    }

    console.log(total);
}

function listaDeNomes() {
    carrinho.produtos.map(produto => {
        console.log(produto.nome)
    })
}

function menorQue80() {
    let retorno = carrinho.produtos.filter(
        produto => produto.preco < 80
    )

    retorno.map(info => {
        console.log(info.nome);
    })
}



// exibirMsg("Everton")
// exibirMsg("Enzo")
// exibirMsg("Kaue")
