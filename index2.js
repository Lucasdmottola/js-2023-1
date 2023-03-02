// let idade = prompt("Qual sua idade?")

// if (idade >= 18) {
//     console.log("Você é maior de idade!");
// }else{
//    console.log("Você é menor de idade!"); 
// }

// Utilizar ponto no lugar de virgula
// let preco = 2.5

// let nome = prompt("Qual o seu nome?")

// if (nome.trim().toUpperCase() === "PEDRO") {
//     console.log("Meu nome é Pedro!");
// }else{
//    console.log("Menu nome não é Pedro!"); 
// }

// let nome = "Everton"
// let idade = 10

// if (nome === "Everton") {
//     if (idade >= 18) {
//         console.log("Você é Everton e é maior de idade!");
//     }else{
//         console.log("Você não é maior de idade");
//     }
// }else{
//     console.log("Você não é Everton");
// }

// if (nome === "Everton" && idade >= 18) {
//     console.log("Você é Everton e é maior de idade!");
// }

// let nome = 'João'
// let idade = 17
// let altura = 1.76

// if (nome === "Everton" || idade >= 18) {
//     console.log("Seja bem vindo");
// }

// function usuario() {
//     let nome = "Dante"
//     let idade = 18
//     let altura = 1.80

//     if (nome !== "Dante") {
//         return "Não é possível continuar, pois o usuário não se chama Dante"
//     }

//     if (idade < 18) {
//         return "Não é possível continuar, pois o usuário é menor de idade"
//     }

//     if (altura <= 1.75) {
//         return "Não é possível continuar, pois o usuário não tem a altura necessária."
//     }

//     return "usuario Cadastrado"
// }

// console.log(usuario()); 

// if (true) {
//     console.log("Verdadeiro");
// } else {
//     console.log("Falso");
// }

// let idade = 20

// if (idade === 20) {
//     console.log(`Você tem vinte anos!`);
// }
// if (idade === 21) {
//     console.log(`Você tem vinte e um anos!`);
// }

// let idade = 21

// switch (idade) {
//     case 20:
//         console.log(`Você tem vinte anos!`);
//         break;

//     case 21:
//         console.log(`Você tem vinte e um anos!`);
//         break;

//     case 22:
//         console.log(`Você tem vinte e dois anos!`);
//         break;

//     default:
//         console.log(`Você tem ${idade}!`);
//         break;
// }


// for (let index = 0; index < 50; index++) {
//     if (index % 2 === 0) {
//         console.log(index, " Par");
//     } else {
//         console.log(index, " Impar");
//     }
// }

// uso de Modulo
// let numero = 10

// console.log(numero % 3);

// let numero = 0;

// while (numero < 1) {

//     idade = prompt("Digite sua idade: ")
//     if (idade > 18) {
//         console.log("Você é maior de idade!");
//         numero++
//     }else{
//         console.log("Digite uma idade valida");
//     }

// } 

// --------------------------------------------
// ATIVIDADE 1

// for (let index = 0; index < 101; index++) {

//     if (index % 2 === 0) {
//         console.log(index);
//     }

// }

// for (let index = 0; index < 101; index++) {

//     if (index % 2 !== 0) {
//         console.log(index);
//     }

// }

// let numero = prompt("Digite um numero")

// if (numero > 1) {
//     for (let index = 0; index <= numero; index++) {
//       console.log(index);        
//     }
// }

// let numero = prompt("Digite um numero: ")

// for (let index = 0; index <= numero; index++) {
//     if (index % 5 == 0) {
//         console.log(index);
//     }    
// }

// let numero = 0

// while (numero < 1) {
//     let nota = prompt("Digite uma nota: ")
//     if (nota >= 0 && nota <= 10) {
//         console.log("Nota valida");
//         numero++
//     } else {
//         console.log("Nota invalida");
//     }
// }