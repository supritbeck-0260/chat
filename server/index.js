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
    sockets.on('newjoinee',data=>{
      if(data.room) sockets.broadcast.emit(data.room,{message:`${data.name} has joined the ${data.room} room.`,type:'other'});
    });
    sockets.on('message',data=>{
    if(data) sockets.broadcast.emit(data.user.room,{message:data.message,type:'other',user:data.user});
  });
  });
  