/*let num = [1, 2, 3, 4, 5]
 
console.log(`O array é ${num}`)*/

let num = [5, 8, 4, 7, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(2)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}
console.log(`O valor 8 está na posição ${pos}`)