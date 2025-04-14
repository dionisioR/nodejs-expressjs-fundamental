const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')
const functions = require('./functions')

const app = express()
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})  


// conexao
const connection = mysql.createConnection(mysql_config)

app.get('/', (req, res) => {
 
    connection.query('SELECT * FROM tasks', (err, rows) => {
        if (err) {
            res.json(functions.response('error', 'Erro na obtenção da lista de tarefas' + err.message))
        }else{
            res.json(functions.response('success', 'Dados obtidos com sucesso', rows))
        }
    })

})