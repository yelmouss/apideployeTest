const http = require('http');
const express = require('express');
const app = express();

app.get('/api/users',(req,res) => {
    return res.status(200).send('hello');
})
 
// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
app.listen(3000,() => {

    console.log('Listening on port 3000')
});