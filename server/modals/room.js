const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
      chats:[
         { 
            id:String,
            date:String,
            messages:[
                {
                    message:String,
                    date:String
                }
            ]
        }
    ]
});

module.exports = mongoose.model('rooms',roomSchema);