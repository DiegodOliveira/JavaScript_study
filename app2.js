//Manipulando Listas

/*var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children
//console.log(itens)

var novoItem = document.createElement("li")
novoItem.textContent = "Suco de Laranja"

var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children
var novoItem2 = document.createElement("li")
novoItem2.textContent = "Margarina"

lista2.replaceChild(novoItem2, itens2[2])

lista.insertBefore(novoItem, itens[2])

console.log(lista2)

var titulo = document.querySelector("h1")
var texto = document.createTextNode("Este é o título")

titulo.appendChild(texto)*/

var nome = "Diego de OLiveira"

//window.alert(typeof(nome))

var carro = new Object()
carro.fabricao = "2025"
carro.cor = "azul"

//window.alert(carro.fabricao)

var soma = function(a,b) {return a+b}

//window.alert(soma(16,6))

let meuarray = ['notebook', 1500.00, {memoria: '16gb', hd: '500gb'}, ['notebook dell', 'modelo 1000']]
//console.log(meuarray[3][1])

let pessoa = {
    nome: "Diego",
    idade: 19,
    feliz: true,
    pets: ["birds"],
    carros: {
        Bugatti: {
            placa: "498UHJ",
            modelo: "Divo",
            cor: "azul"
        },
        Ferrari: {
            placa: "560DIK",
            modelo: "La Ferrari",
            cor: "vermelho"
        }
    },
    /*dirigiu: function(km) {
        alert(pessoa.nome+" dirigiu "+km+" km")
    }*/
}

//pessoa.dirigiu(17)

//console.log(pessoa.carros.Bugatti.modelo)

/*let x = 11
let y = 5

var resultado = x % y*/

let n2 = 8
let n3 = 7
let n4 = 8
resultado = (n2 + n3 + n4) / 3

//window.alert(resultado)

let x = 5
let y = 2

/*console.log(x)

x--

console.log(x)*/
//Saiba se é diferente de 4 assim : x != 4
//Nessa parte de operadores você usou o terminal com node, então nem tudo talvez esteja comentado
//console.log(x == 5)

/*script do node em 10/01/23
> x > 2
true
> x < 40
true
> x >= 8
false
> x >= 3
true
> x <= 4
> let media = 8
undefined
> let frequencia = 80
undefined
> media <= 8 && frequencia <=80
true
> media <= 8 && frequencia < 60
false
Nesse ultimo caso ambas as condições devem ser atendidas por && para ser true, caso o contrário será false
*/

let idade = 12

let eleitor = !(idade >= 15) ? "Pode votar" : "Não pode votar"
//window.console.log(eleitor)

//var anos = window.prompt("Quantos anos você têm?")
//let usuario = (anos < 18) ? window.alert("Você é menor de idade!") : window.alert("Já é de maior")

let pais = "Turquia"
let estado = "ba"

/*switch(pais) {
    case 'Brasil':
        console.log("Intankável o Bostil")
        break
    case 'Canada':
        console.log("oooooohhh canadaaaa")
        break
    default:
        console.log("Desconhecido")
}

if (pais == "Canada") {
    window.console.log("Sou Brasileiro")
} else if (estado == "ba") {
    console.log("KKKKKK BAIANO")
}
else {
    console.log("Sou gringo")
}*/

let countries = document.getElementsByClassName("paises")
let i = 0

/*for (let i = 0; i < countries.length; i++){
    console.log(countries[i].innerHTML)
}*/

/*while (i < countries.length){
    console.log(countries[i].innerHTML)
    i++
}*/

let fruta = {nome: "Banana", preco: 9.99, unidade:1}
let aparelhos = ["fone","mouse","monitor","microfone"]
/*for (let valor in fruta){
    console.log(fruta[valor])
}*/

for (let valor of aparelhos){
    console.log(valor)
}

/*function exibirAlert(){
    alert("Funcionou!")
}

exibirAlert()*/

function soma(x, y){
    return x + y
}

//console.log(soma(4, 6))

document.getElementById("resultado").innerHTML = soma(9, 8)

console.log(confirm("Deseja mesmo entrar nesse site?"))