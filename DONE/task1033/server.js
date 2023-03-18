import express from 'express';

const server = express();

server.get('/hello', (req, res) => {
 return res.send('Hello, Coderslang!');
})

server.get('/about',(req,res) => {
 return  res.send('Lorem ipsum dolor sit amet');
})

export { server };