const socket = require('socket.io');
const liveChat=(server)=>{
    const io = socket(server, {
        cors: {
          origin: '*',
        }
      });
    
      io.on('connection',(sockets)=>{
        sockets.on('newjoinee',data=>{
          try {
            if(data && data.room) sockets.broadcast.emit(data.room,{message:`${data.name} has joined the room.`,type:'other'});
          } catch (error) {
            console.log(error)
          }
         
        });
        sockets.on('message',data=>{
          try {
            if(data && data.user) sockets.broadcast.emit(data.user.room,{message:data.message,type:'other',user:data.user});
          } catch (error) {
            console.log(error)
          }
      });
      sockets.on('disconnected',(data)=>{
        try {
          if(data && data.user) sockets.broadcast.emit(data.user.room,{message:`${data.user.name} left the room.`,type:'other'});
        } catch (error) {
          console.log(error)
        }
       
      });
      });
    
}

  module.exports = liveChat;
  