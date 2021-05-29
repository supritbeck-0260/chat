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
            const post = {
                name:data.name,
                message,
                date:new Date()
            }
            let find = await Message.findById({_id:data.room});
            if(find) find.texts.push(post);
            else find = new Message({texts:[post], _id:data.room});
            find.save();
            sockets.broadcast.emit(data.room,{message,type:'other'});
          } catch (error) {
            console.log(error)
          }
         
        });
        sockets.on('message',async data=>{
          try {
            if(!data && !data.user) return 
            const message = data.message;
            const post = {
                name:data.user.name,
                message,
                date:new Date()
            }
            let find = await Message.findById({_id:data.user.room});
            if(find) find.texts.push(post);
            else find = new Message({texts:[post],_id:data.user.room});
            find.save();
            sockets.broadcast.emit(data.user.room,{message,type:'other',user:data.user});
          } catch (error) {
            console.log(error)
          }
      });
      sockets.on('disconnected',async (data)=>{
        try {
          if(!data && !data.user) return 
          const message = `${data.user.name} left the room.`;
          const post = {
            name:data.user.name,
            message,
            date:new Date()
        }
            let find = await Message.findById({_id:data.user.room});
            if(find) find.texts.push(post);
            else find = new Message({texts:[post], _id:data.user.room});
            find.save();
            sockets.broadcast.emit(data.user.room,{message,type:'other'});
        } catch (error) {
          console.log(error)
        }
       
      });
      });
    
}

  module.exports = liveChat;
  