const express = require('express')
const mysql = require('mysql2')

const app = express()
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})  


// conexao
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
})

connection.connect((err) => {
    if(err){
        console.log(`Erro na conexão com o banco de dados: ${err.message}`)
        return
    }
    console.log('Conectado ao banco de dados MySQL')
})

app.get('/', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results, fields) => {
        if (err) {
            console.log(err)
            console.log(err.sqlMessage)
            console.log(err.sql)
            res.send("Erro ao obter a lista de tarefas")
        }else{
            res.send(results)
        }
    })
})