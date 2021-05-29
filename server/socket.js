const socket = require('socket.io');
const Message = require('./modals/messages');
const user = require('./modals/user');
const liveChat=(server)=>{
    const io = socket(server, {
        cors: {
          origin: '*',
        }
      });
    
      io.on('connection',(sockets)=>{
        sockets.on('newjoinee',async data=>{
          try {
            if(!data && !data.room) return
            const message = `${data.name} has joined the room.`;
            sockets.broadcast.emit(data.room,{message,id:data.id,date:new Date()});
          } catch (error) {
            console.log(error)
          }
         
        });
        sockets.on('message',async data=>{
          try {
            if(!data && !data.user) return 
            const message = data.message;
            const {id,name,room} = data.user;
            const post = {
                name,
                message,
                date:new Date(),
                id:id
            }
            let find = await Message.findById({_id:room});
            if(find) find.texts.push(post);
            else find = new Message({texts:[post],_id:room});
            find.save();
            
            sockets.broadcast.emit(data.user.room,{message,...post,_id:room});
          } catch (error) {
            console.log(error)
          }
      });
      sockets.on('disconnected',async (data)=>{
        try {
          if(!data && !data.user) return 
          const message = `${data.user.name} left the room.`;
            sockets.broadcast.emit(data.user.room,{message,id:data.id,date:new Date()});
        } catch (error) {
          console.log(error)
        }
       
      });
      });
    
}

  module.exports = liveChat;
  