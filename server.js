const express = require('express')
const path = require('path')
const app = express()
 
app.get('/',(req , res) => {
    res.sendFile(path.join( dirname, 'public', 'index.html'))
})
app.listen(5000, err => {
    if (err){
        throw err
    }
    else {
        console.log('SERVER IS RUNNING...') 
    }
})