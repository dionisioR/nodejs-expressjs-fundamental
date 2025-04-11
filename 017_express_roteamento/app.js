const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Estudando EXPRESS!!!');
})

app.get('/about', (req, res) => {
    res.status(200).send({'name': 'Lucas', 'age': 22, 'city': 'São Paulo'});
})

app.use((req, res)=>{
    res.status(404).send('Página não encontrada!');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})