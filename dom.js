let usuarios = [

]

function cadastrarUsuarios(e) {
    e.preventDefault();

    let nome = document.querySelector("#inputNome")
    let idade = document.querySelector("#inputIdade")

    let usuario = {
        nome: nome.value,
        idade: idade.value
    }

    usuarios.push(usuario)

    nome.value = ""
    idade.value = ""

    // usuarios.push({
    //     nome,
    //     idade
    // })
    logUsuarios()
}

document.getElementById("cadastro").addEventListener(
    'click', cadastrarUsuarios
)

function logUsuarios() {
    console.log(usuarios);

    let divClientes = document.querySelector("#clientes")
    divClientes.innerHTML = ""

    usuarios.map(usuario => {

        let divUsuario = document.createElement('div')
        divUsuario.classList.add("centralizar")
        
        let nomeUsuario = document.createElement('p')
        let idadeUsuario = document.createElement('p')

        nomeUsuario.innerHTML = usuario.nome
        idadeUsuario.innerHTML = usuario.idade

        divUsuario.appendChild(nomeUsuario)
        divUsuario.appendChild(idadeUsuario)

        divClientes.appendChild(divUsuario)
    })
}


