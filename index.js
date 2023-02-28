// var //Não utiliza por ser antiga 
// let // O que pode ser alterado 
// const // O que não é alterado

// let nome = "Everton"

// console.log(nome);

// nome = "João"

// console.log(nome);

// const pi = 3.14

// console.log(pi);

// pi = 4

// console.log(pi);

// let resultado = true

// console.log(resultado);

// resultado = false

// console.log(resultado)

// console.log(1 <= 10)

// console.log()

// let pratoDoDia = "Lasanha"
// let precoPratoDia = 24.90
// let frete = 13.89
// let cliente = "Everton"

// // console.log("O total do pedido do "+ cliente +" foi de: "+ resultado +".")

// console.log(`O total do pedido do ${ cliente } foi de ${ precoPratoDia + frete }`);

// > 
// <
// >=
// <= 
// ===
// !== 

// let a = ""
// let b = "Copo de agua"
// let c = "beba um"

// a = b
// b = c
// c = a

// console.log(a, b, c);

// let valor = prompt("Digite seu valor: ")

// if (valor < 200) {
//     console.log("O valor é menor que 200");

//     let cartao = prompt("Você vai utilizar cartão? S / N")

//     if (cartao === 'S') {
//         console.log("Ele vai usar cartão");
//     }

// } else {
//     console.log("O valor é maior que 200");
// }


let resposta1 = prompt("Você gosta de video games?")

if (resposta1 === 's') {

    let resposta2 = prompt("Você tem amigos?")

    if (resposta2 === 's') {
        
        let resposta3 = prompt("Amigos Reais ou Virtuais?")

        if (resposta3 === "r") {
            console.log("Compre um Wii");
        }else{
            console.log("Compre um Xbox");
        }

    } else {
        console.log("Compre um PS3");
    }
    
}else{
    console.log("Compre um PC");
}