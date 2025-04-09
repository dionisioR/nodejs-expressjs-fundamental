// módulo require
let nomes = require('./dados.js')
console.log(nomes)
console.log(nomes[0])
console.log(nomes[1])

console.log('------------------')
console.table(nomes)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log('------------------')