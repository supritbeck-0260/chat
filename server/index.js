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
      try {
        if(data && data.room) sockets.broadcast.emit(data.room,{message:`${data.name} has joined the ${data.room} room.`,type:'other'});
      } catch (error) {
        console.log(error)
      }
     
    });
    sockets.on('message',data=>{
      try {
        if(data) sockets.broadcast.emit(data.user.room,{message:data.message,type:'other',user:data.user});
      } catch (error) {
        console.log(error)
      }
  });
  sockets.on('disconnected',(data)=>{
    try {
      if(data) sockets.broadcast.emit(data.user.room,{message:`${data.user.name} left the ${data.user.room} room.`,type:'other'});
    } catch (error) {
      console.log(error)
    }
   
  });
  });
  