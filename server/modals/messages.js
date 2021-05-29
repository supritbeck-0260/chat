const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    texts:[
        {
            text:String,
            date:String,
            name:String
        }
    ]
});

module.exports = mongoose.model('messages',messageSchema);