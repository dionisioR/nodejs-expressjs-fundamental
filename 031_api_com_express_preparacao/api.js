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
