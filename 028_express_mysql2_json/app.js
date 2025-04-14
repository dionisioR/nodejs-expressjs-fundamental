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
 
    let results = {
        status: 'success',
        message: null,
        data: null
    }

    connection.query('SELECT * FROM tasks', (err, rows) => {
        if (err) {
            results.status = 'error'
            results.message = 'err.sqlMessage'
            results.data = null
            res.json(results)
        }else{
            results.status = 'success'
            results.message = null
            results.data = rows
            res.json(results)
        }
    })
})