// módulo require
let dados = require('./dados.js')
console.log(dados.nomes)
console.log(dados.frutas)


console.log(dados.nomes[0])
console.log(dados.nomes[1])

console.log('------------------')
console.table(dados.nomes)

for (let i = 0; i < dados.nomes.length; i++) {
    console.log(dados.nomes[i])
}
console.log('------------------')
console.log('------------------')

console.log(dados.frutas)
console.log(dados.frutas[0])
console.log(dados.frutas[1])
console.log('------------------')
console.table(dados.frutas)
for (let i = 0; i < dados.frutas.length; i++) {
    console.log(dados.frutas[i])
}