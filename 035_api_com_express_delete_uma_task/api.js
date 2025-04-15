// requires
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

// project files
const mysql_config = require('./inc/mysql_config')
const functions = require('./inc/functions')

const API_AVAILABILITY = true 
const API_VERSION = '1.0.0'

// init server
const app = express()
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

// check if api is available
app.use((req, res, next)=>{
    if(API_AVAILABILITY){
        next()
    }else{
        res.json(functions.response('warning', 'API is in maintenance', 0, null))
    }
})

// mysql connection
const connection = mysql.createConnection(mysql_config)

// cors
app.use(cors()) // qualquer domínio pode acessar a API

//===================================================================
// routes
app.get('/', (req, res) => {
    res.json(functions.response('success', 'API is running', 0, null))
})
//-------------------------------------------------------------------
// endpoints
//-------------------------------------------------------------------
// get all tasks
app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, rows) => {
        if (!err) {
            res.json(functions.response('success', 'Success', rows.length, rows))
        } else {
            res.json(functions.response('error', 'Error fetching tasks', 0, null))
        }
    })
})
//-------------------------------------------------------------------
// update task status
app.put("/tasks/:id/status/:status", (req, res) => {
    const id = req.params.id
    const status = req.params.status

    connection.query('update tasks set status = ? WHERE id = ?',[status, id], (err, rows)=>{
        if(!err){

            if(rows.affectedRows > 0){
                res.json(functions.response('success', 'Task updated', rows.affectedRows, null))
            }else{
                res.json(functions.response('warning', 'Task not found', 0, null))
            }

        }else{
            res.json(functions.response('error', err.message, 0, null))
        }
    })

})
//-------------------------------------------------------------------
// delete task
app.delete("/tasks/:id/delete", (req, res)=>{
    const id = req.params.id
    const query = 'delete from tasks where id = ?'
    connection.query(query, [id], (err, rows)=>{
        if(!err){

            if(rows.affectedRows > 0){
                res.json(functions.response('success', 'Task deleted', rows.affectedRows, null))
            }else{
                res.json(functions.response('warning', 'Task not found', 0, null))
            }

        }else{
            res.json(functions.response('error', err.message, 0, null))
        }
    })
})

//-------------------------------------------------------------------
// get task by id
app.get("/tasks/:id", (req, res) => {
    const id = req.params.id
    connection.query('select * from tasks where id = ?', [id], (err, rows)=>{
        if(!err){

            if(rows.length > 0){
                res.json(functions.response('success', 'Success', rows.length, rows))
            }else{
                res.json(functions.response('warning', 'Task not found', 0, null))
            }

        }else{
            res.json(functions.response('error', err.message, 0, null))
        }
    })
})
//-------------------------------------------------------------------
// rota inexistente
app.use((req, res)=>{
    res.json(functions.response('warning', 'Route not found', 0, null))
})