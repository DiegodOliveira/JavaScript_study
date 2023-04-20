//Primeira solução
let pessoa = {
    nome: "Artorias da Silva",
    idade: 30,
    profissão: "Policial",
    endereço: {
        logradouro: "Avenida X",
        bairro: "São Humberto",
        cidade: "Curitiba",
        cep: "5400-078"
    }
};

//Segunda solução
function imprimePessoa(){
    console.log(
        "Nome: " + pessoa.nome + "\nIdade: " + pessoa.idade +  "\nProfissão: " + pessoa.profissão + "\nEndereço: " + "\n  Logradouro" + pessoa.endereço.logradouro + "\n  Bairro: " + pessoa.endereço.bairro + "\n  Cidade: " + pessoa.endereço.cidade + "\n  CEP: " + pessoa.endereço.cep
    )
};

//imprimePessoa();

//Terceira solução
pessoa.telefone = "8765-8096";

imprimePessoa();
console.log(pessoa);

//Quarta solução
pessoa.obterDados = function(){
    console.log(
        "Nome: " + this.nome + "\nIdade: " + this.idade +  "\nProfissão: " + this.profissão + "\nEndereço: " + "\n  Logradouro" + this.endereço.logradouro + "\n  Bairro: " + this.endereço.bairro + "\n  Cidade: " + this.endereço.cidade + "\n  CEP: " + this.endereço.cep
    );
};

pessoa.obterDados();

//Quinta solução
pessoa.compararDados = function(outraPessoa){
    if (this.nome == outraPessoa.nome && this.idade == outraPessoa.idade)
        return true
    else
        return false
}

//Sexta solução
let novaPessoa = {
    nome: "Giorno Santana",
    idade: 21,
    profissão: "Pintor",
    endereço: {
        logradouro: "Rua Romana",
        bairro: "Nova Nápoles",
        cidade: "Bayeux",
        cep: "5344-908"
    }
}

//Sétima solução
pessoa.compararDados(novaPessoa);

function imprimirCompa(){
    console.log(
        pessoa.compararDados(novaPessoa)
    )
}

imprimirCompa()