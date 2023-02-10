/*var p1 = document.getElementsByTagName("p")[1]
document.write("Está escrito assim: "+ p1.innerText)

var para = document.getElementsByTagName("p")[0]
para.innerHTML = "Outro texto"*/

var a = window.document.getElementById("area")
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)

function clicar(){
    a.innerText = "Clicou!"
    a.style.background = "blue"
}

function entrar(){
    a.innerText = "Entrou!"
    a.style.background = "orange"
}

function sair(){
    a.innerText = "Saiu!"
    a.style.background = "red"
}

function somar(){
    var tn1 = window.document.getElementById("txtn1")
    var tn2 = window.document.querySelector("input#txtn2")
    var res = window.document.getElementById("res")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}