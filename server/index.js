const express = require('express');
const app = express();
const socket = require('socket.io');
app.get('/',(req,res)=>res.json('it is working.'))
const server = app.listen(5000,()=>console.log('server is running...'));
const io = socket(server, {
    cors: {
      origin: '*',
    }
  });

  io.on('connection',(sockets)=>{
    console.log('new user connected.');
  });
  