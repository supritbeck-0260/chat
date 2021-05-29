const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    texts:[
        {
            message:String,
            date:String,
            name:String,
            id:String
        }
    ]
});

module.exports = mongoose.model('messages',messageSchema);