const express = require('express')
const  app = express()
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

app.get('/', (req, res) => {
  res.send('Teste com parâmetros!')
})

// router
app.get('/distancia/:pontoA/:pontoB', (req, res) => {
  const pontoA = Math.abs(req.params.pontoA)
  const pontoB = Math.abs(req.params.pontoB)
  const distancia = pontoA - pontoB
  res.send(`A distância entre os pontos ${pontoA} e ${pontoB} é de ${distancia} km`)
})

// hifen
app.get('/distancia/:pontoA-:pontoB', (req, res) => {
  const pontoA = Math.abs(req.params.pontoA)
  const pontoB = Math.abs(req.params.pontoB)
  const distancia = pontoA - pontoB
  res.send(`A distância entre os pontos ${pontoA} e ${pontoB} é de ${distancia} km`)
})

// ponto
app.get('/distancia/:pontoA.:pontoB', (req, res) => {
  const pontoA = Math.abs(req.params.pontoA)
  const pontoB = Math.abs(req.params.pontoB)
  const distancia = pontoA - pontoB
  res.send(`A distância entre os pontos ${pontoA} e ${pontoB} é de ${distancia} km`)
})