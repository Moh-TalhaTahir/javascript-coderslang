import express from 'express';
import morgan from 'morgan';
import { CONFIG } from './constants.js';


const server = express();


//Here, we'll implement our routes and middleware

server.get('/check',(req,res) => {
    res.json({ version: '0.0.1' });
});
server.get('/config',(req,res) =>  {
    res.send(CONFIG);
});

server.use(morgan('tiny'));

export { server };