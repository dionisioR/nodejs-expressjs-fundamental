const express = require('express')
const server = express()

// middleware
server.use((req, res, next)=>{
    console.log('teste')
    next()
})

server.use((req, res, next)=>{
    req.requestTime = new Date()
    next()
})

server.get('/', (req, res) => {
    console.log(req.requestTime)
    res.send('<h1>TESTE1</h1>')
})
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})