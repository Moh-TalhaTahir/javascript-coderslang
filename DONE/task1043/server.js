import express from 'express';

import { logRequestType,logRequestTimestamp } from './middleware.js';

const server = express();

server.use(logRequestType);
server.use(logRequestTimestamp);

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
})

export { server };