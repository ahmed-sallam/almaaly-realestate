const express = require('express');

const app = express();

const port = process.env.PORT || 3000 ;

app.get('/', (req, res)=>{
    res.send('Hi, I am Ahmed Sallam ;)')
});

app.listen( port, ()=>{
    console.log('Server is runinnge on port ', port)
});