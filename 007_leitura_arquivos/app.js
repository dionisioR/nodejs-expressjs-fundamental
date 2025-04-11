const fs = require('fs')

// fs.readFile('./dados.csv',(err, data)=> {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

let dados = '';
if(fs.existsSync('./dados.csv')){
    dados = fs.readFileSync('./dados.csv', 'utf8')
    console.log(dados.toString())
} else {
    console.log('Ficheiro não existe')
}


console.log('FIM')