const express = require('express');
const server = express();

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})

// rotas
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/home.html')
})

// outra forma de fazer a mesma coisa
server.get('/home', (req, res) => {
    res.sendFile('/view/home.html', { root: __dirname })
})

server.get("/about", (req, res) => {
    res.sendFile('/view/about.html', { root: __dirname })
})
server.get("/services", (req, res) => {
    res.sendFile('/view/services.html', { root: __dirname })
})

// redirecionamento
server.get("/contato", (req, res) => {
    res.redirect('/about')
})
server.use((req, res) => {
    res.status(404).sendFile('/view/404.html', { root: __dirname })
    console.log('Página não encontrada')
})