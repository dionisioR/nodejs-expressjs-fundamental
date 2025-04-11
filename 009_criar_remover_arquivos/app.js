const fs = require('fs')

// escrever em um log
let log = "Mensagem de log\n"

// sincrono
// fs.writeFileSync('log.txt', log, {flag: 'a+'})


// assíncrono
// fs.writeFile('log2.txt', log, {flag: 'a+'}, (err) => {
//     if (err) {
//         console.log("Erro ao escrever o arquivo")
//         return
//     }
//     console.log("Arquivo escrito com sucesso")
// })

// removendo o arquivo - assíncrono
// fs.unlink('log.txt', (err) => {
//     if (err) {   
//         console.log("Erro ao remover o arquivo")
//         console.log(err.message)
//         return
//     }
//     console.log("Arquivo removido com sucesso")
// })

// removendo o arquivo - sincrono
if (fs.existsSync('log2.txt')) {
    fs.unlinkSync('log2.txt')
    console.log("Arquivo removido com sucesso")
}
else {
    console.log("Arquivo não existe")
}


console.log("FIM")