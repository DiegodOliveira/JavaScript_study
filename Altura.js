let contador = 0;
let alturaFeminina = [];
let alturaMasculina = [];
var quantMulheres = alturaFeminina.count;
var quantHomens = alturaMasculina.count;
var somaAlturaHomens = 0;

while (contador < 15){
    var altura = prompt("Qual a altura?");
    var sexo = prompt("F ou M?");
    if(sexo = "M"){
        alturaMasculina.push(altura);
        somaAlturaHomens += alturaMasculina;
    }else if(sexo = "F"){
        alturaFeminina.push(altura);
    }
    contador++;
}

var menorAltura = Number(Math.min(altura))
var maiorAltura = Number(Math.max(altura));
var mediaAlturaHomens = somaAlturaHomens / quantHomens;

alert(`A maior altura é ${maiorAltura}`)
alert(`A menor altura é ${menorAltura}`)
alert(`A média de altura dos homens é ${mediaAlturaHomens}`)
alert(`O número de mulheres é ${quantMulheres}`)