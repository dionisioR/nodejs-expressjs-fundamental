const http = require('http')
let port = 3000
let host = 'localhost'

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write("<h1>Requisicao recebida</h1>")
    res.write("<p>Servidor rodando em HTML</p>")
    res.end()
})

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`)
})