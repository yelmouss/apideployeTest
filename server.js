const http = require('http');
const express = require('express');
const app = express();

app.get('/api/users',(req,res) => {
    return res.status(200).send('hello');
})
 
app.get('/api/public', (req, res)=>{
    res.status(200).send({    
      'MyLove':'Racha Bennis'
    })
    })
 
app.listen(3000,() => {

    console.log('Listening on port 3000')
});