const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type: String,
        },
});

module.exports = mongoose.model('user',userSchema);