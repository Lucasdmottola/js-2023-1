class Pessoa{
    constructor(paramNome, paramIdade, paramProfissao, paramFone){

        this.nome = paramNome
        this.idade = paramIdade
        this.profissao = paramProfissao
        this.telefones = paramFone
    }

    retornaNome(){
        return this.nome
    }

    retornaIdade(){
        return this.idade
    }

    retornaProfissao(){
        return this.profissao
    }

    alterarProfissao(novaProfissao){
        this.profissao = novaProfissao
    }

    adicionarFone(numero){

        if (!(numero.length > 10)) {
            return "Numero não cadastrado!!!"
        }

        let resultado = this.telefones.find(telefone => telefone === numero)

        if (resultado !== undefined) {
             return "Numero já cadastrado!!!"
        }

        this.telefones.push(numero)

    }

    exibirTelefones(){
        this.telefones.map(telefone => {
            console.log(`Telefone: ${telefone}`);
        })
    }

}

let novaPessoa = new Pessoa("Everton", 25, "Programador", [])
