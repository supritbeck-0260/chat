const jwt = require('jsonwebtoken');
require('dotenv/config');
const User = require('../modals/user');
const Auth = async (req,res,next)=>{
    try {
        const token = req.headers.authentication;
        const user = jwt.decode(token,process.env.SECRET_KEY);
        const find = await User.findById({_id:user.id},{password:0,__v:0});
        if(find) req.user = {id:find._id,name:find.userName,email:find.email};
        else return res.json({message:'Authentication Failed!',status:403})
        next();   
    } catch (error) {
        res.json({message:'Authentication Failed!',status:403});
    }
}

module.exports = Auth;