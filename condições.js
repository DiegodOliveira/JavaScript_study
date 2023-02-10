/*var vel = 40
console.log(`A velocidade do seu carro é de ${vel}km/h`)

console.log(`Dirija sempre usando sinto de segurança`)*/

/*var idade = 16

if (idade >= 18){console.log(`Bora se alistar seu nóia!`)}
else {console.log(`Vai estudar mlk!`)}*/

//CONDIÇÕES COMPOSTAS

/*var idade = 17
console.log(`Você tem ${idade} anos`)

if(idade < 16){console.log("Não vota!")}
else if(idade < 18 || idade > 65){console.log("Ir votar é opcional")}
else{console.log("Ir votar é obrigatório")}*/

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)

if(hora < 12){console.log("Bom dia!")}
else if(hora < 18){console.log("Boa Tarde!")}
else{console.log("Boa noite!")}
