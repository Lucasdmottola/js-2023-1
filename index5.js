// let produtos = []

// function exibirProdutos() {
//     for (let index = 0; index < produtos.length; index++) {
//      console.log(produtos[index]); 
//     }
// }

// function adicionarProdutos(nome, preco) {
   

//     if (preco > 2) {

//         produtos.push({nome, preco})

//         return "Produto cadastrado com sucesso!" 

//     }else{
//         return "Esse produto não pode ser cadastrado!"
//     }
    
// }

// function totalProdutos() {
//     let total = 0

//     for (let index = 0; index < produtos.length; index++) {
//         total += produtos[index].preco
//     }

//     return `O preço de todos os produtos somados é ${total} `
// }

// adicionarProdutos("Caneta", 1)

class Carrinho {

    constructor(paramFrete){
        this.produtos = []
        this.frete = paramFrete
        this.subtotal = 0
        this.total = this.frete
    }

    adicionarProduto(nome, qtd, preco){
        this.produtos.push({nome, qtd, preco})
        this.calcularSubTotal()
    }

    calcularSubTotal(){
        for (let index = 0; index < this.produtos.length; index++) {
           
            this.subtotal += this.produtos[index].preco * this.produtos[index].qtd
            
        }
        this.calcularTotal()
    }

    calcularTotal(){
        this.total = this.frete + this.subtotal
    }

    exibirTotal(){
        return this.total
    }

}

let meuCarrinho = new Carrinho(8)

