const http = require('http');
const fs = require('fs');
let port = 3000
let host = 'localhost'

const server = http.createServer((req, res) => {
    // header
    res.setHeader('Content-Type','text/html; charset=utf-8')

    // rotas
    let html_page = ''

    switch (req.url) {
        case '/':
            html_page = 'home.html'
            res.statusCode = 200
            break
        case '/home':
            html_page = 'home.html'
            res.statusCode = 200
            break
        case '/services':
            html_page = 'services.html'
            res.statusCode = 200
            break
        case '/about':
            html_page = 'about.html'
            res.statusCode = 200
            break
        default:
            html_page = '404.html'
            res.statusCode = 404
    }

    // prepara a página html
    fs.readFile("./html/" + html_page, (err, data) => {
        if (err) {
            res.statusCode = 500
            res.end('Erro interno do servidor')
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
})