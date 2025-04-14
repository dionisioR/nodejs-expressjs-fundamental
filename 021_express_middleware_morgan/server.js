const express = require('express')
const morgan = require('morgan')

const server = express()
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

// middleware
// server.use(morgan('tiny')) // dev, common, short, tiny
// server.use(morgan(':method :url : status')) 
server.use(morgan('Método :method | Status :status | Url :url | Time :response-time ms')) 

server.get('/', (req, res) => {
    res.send('TESTE')
})