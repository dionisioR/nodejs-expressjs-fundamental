// módulo require
let {nomes, frutas} = require('./dados.js')
console.log(nomes)
console.log(frutas)


console.log(nomes[0])
console.log(nomes[1])

console.log('------------------')
console.table(nomes)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log('------------------')
console.log('------------------')

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log('------------------')
console.table(frutas)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}