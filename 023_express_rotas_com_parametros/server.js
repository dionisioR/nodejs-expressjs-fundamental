const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('Servidor em execução.')
})

// dados dos clientes
const clientes = [
    {id: 1, nome: 'João', telefone: '111111111', email: 'joao@gmail.com'},
    {id: 2, nome: 'Maria', telefone: '222222222', email: 'maria@mail.com'},
    {id: 3, nome: 'José', telefone: '333333333', email: 'jose@gmail.com'},
    {id: 4, nome: 'Pedro', telefone: '444444444', email: 'pedro@gmail.com'},
    {id: 5, nome: 'Paula', telefone: '555555555', email: 'paula@gmail.com'}
];

// routes
app.get('/', (req, res) => {
    res.send('API de Clientes!')
})

app.get("/total_clientes", (req, res) => {
    const total = clientes.length
    res.send(`Total de clientes: ${total}`)
})

// route para apresentar os dados de um cliente específico
app.get('/cliente/:id', (req, res) => {
    const id = req.params.id
    const cliente = clientes.find(cliente => cliente.id == id)
    
    // se o cliente não for encontrado, retorna um erro 404
    if (!cliente) {
        res.status(404).send('Cliente não encontrado')
    }

    // se o cliente for encontrado, retorna os dados do cliente
    res.send(`cliente: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email}`)

})