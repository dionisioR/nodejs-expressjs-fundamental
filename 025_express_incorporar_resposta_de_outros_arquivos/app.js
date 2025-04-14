const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

// importar funções
const funcoes = require('./functions')

app.get('/', (req, res) => {
  res.send('Teste com arquivos externos!')
})

app.get('/add/:a/:b', (req, res) => {
  const num1 = parseInt(req.params.a)
  const num2 = parseInt(req.params.b)
  const resultado = funcoes.add(num1, num2)
  res.send(`A soma de ${num1} e ${num2} é igual a ${resultado}`)
})
app.get('/sub/:a/:b', (req, res) => {
  const num1 = parseInt(req.params.a)
  const num2 = parseInt(req.params.b)
  const resultado = funcoes.sub(num1, num2)
  res.send(`A subtração de ${num1} e ${num2} é igual a ${resultado}`)
})