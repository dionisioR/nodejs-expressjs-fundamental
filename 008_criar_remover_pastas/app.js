const fs = require('fs');

// sincrono
// fs.mkdirSync("logs")

// assincrono
// fs.mkdir("logs2", (err) => {
//     if (err) {
//         console.log("Erro ao criar pasta: ", err)
//     } else {
//         console.log("Pasta criada com sucesso!")
//     }
// })

// remover pasta sincrono
if(fs.existsSync("logs")){
    fs.rmdirSync("logs")
    console.log("Pasta removida com sucesso!")
}
console.log("fim")