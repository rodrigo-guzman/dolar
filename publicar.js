const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Saludoos desde express');
})

app.listen(3000,()=>{
    console.log('Conect to port 3000')
})