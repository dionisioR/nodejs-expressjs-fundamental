const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config')

const app = express()
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})  


// conexao
const connection = mysql.createConnection(mysql_config)

app.get('/', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results, fields) => {
        if (err) {
            console.log(err.message)
            res.send("Erro ao obter a lista de tarefas")
        }else{
            res.send(results)
        }
    })
})