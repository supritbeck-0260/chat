const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    users:Array,
    date:String,
    messages:[
        {
            name:String,
            message:String,
            date:String
        }
    ]
});

module.exports = mongoose.model('rooms',roomSchema);