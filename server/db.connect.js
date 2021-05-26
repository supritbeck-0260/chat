const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    (err)=>{
    if(err) throw err;
    console.log("DB Connected..");
});

module.exports = mongoose;