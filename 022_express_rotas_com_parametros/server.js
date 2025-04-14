const express = require('express');
const server = express();

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})


// routes
server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/contato', (req, res) => {
  res.send('Página de contato')
})

// rota com um parâmetros
server.get("/contato/:nome", (req, res) => {
  const nome = req.params.nome
  res.send(`Olá ${nome}, tudo bem?`)
})

// rota com dois parâmetros
server.get("/contato/:nome/:idade", (req, res) => {
  const nome = req.params.nome
  const idade = req.params.idade
  res.send(`Olá ${nome}, você tem ${idade} anos.`)
})

// rota com soma de dois parâmetros
server.get("/soma/:a/:b", (req, res) => {
  const num1 = parseInt(req.params.a)
  const num2 = parseInt(req.params.b)
  const soma = num1 + num2
  res.send(`A soma de ${num1} + ${num2} é igual a ${soma}`)
})