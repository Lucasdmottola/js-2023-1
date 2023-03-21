// let elemento = document.createElement("p")
// elemento.textContent = "Olá gente de 2023"

// let conteudo = document.querySelector("#conteudo")

// conteudo.appendChild(elemento)

// JavaScript Vanilla 
// let texto = document.querySelector("#texto")

// let botao = document.querySelector("#botao")

// botao.addEventListener("click", function() {
//     texto.innerHTML = "Texto Modificado"
// })


// JQuery
let texto = $("#texto")

$("#botao").on("click", function(){
    texto.html("Oi, texto com Jquery")
})