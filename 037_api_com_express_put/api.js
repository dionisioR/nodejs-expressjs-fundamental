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

// treat post paramans
app.use(express.json()) // permite receber dados em formato json no body da requisição [for parsing application/json]
app.use(express.urlencoded({ extended: true })) // permite receber dados em formato urlencoded no body da requisição [for parsing application/x-www-form-urlencoded]


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
// create task - insert - post
app.post("/tasks/create", (req, res)=>{

    // get data from request body
    const post_data = req.body

    // check if data is empty
    if(post_data == undefined){
        res.json(functions.response('warning', 'Empty data', 0, null))
        return
    }

    // check if data is valid
    if(post_data.task == undefined || post_data.status == undefined){
        res.json(functions.response('warning', 'Invalid data', 0, null))
        return
    }

    // get data from request body
    const task = post_data.task
    const status = post_data.status
    const query = 'insert into tasks (task, status, created_at, updated_at) values (?, ?, now(), now())'
    connection.query(query, [task, status], (err, rows)=>{
        if(!err){

            if(rows.affectedRows > 0){
                res.json(functions.response('success', 'Task created', rows.affectedRows, null))
            }else{
                res.json(functions.response('error', err.message, 0, null))
            }

        }else{
            res.json(functions.response('error', err.message, 0, null))
        }
    })
})
//-------------------------------------------------------------------
// update task - put
app.put("/tasks/:id/update", (req, res)=>{
    const id = req.params.id
    const post_data = req.body

    // check if data is empty
    if(post_data == undefined){
        res.json(functions.response('warning', 'Empty data', 0, null))
        return
    }

    // check if data is valid
    if(post_data.task == undefined || post_data.status == undefined){
        res.json(functions.response('warning', 'Invalid data', 0, null))
        return
    }

    // get data from request body
    const task = post_data.task
    const status = post_data.status

    const query = 'update tasks set task = ?, status = ?, updated_at = now() where id = ?'
    
    connection.query(query, [task, status, id], (err, rows)=>{
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
// rota inexistente
app.use((req, res)=>{
    res.json(functions.response('warning', 'Route not found', 0, null))
})