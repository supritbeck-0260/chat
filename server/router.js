const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./modals/user');
const bcrypt = require('bcrypt');

router.post('/signup',async (req,res)=>{
    try {
        const {email,userName,password} = req.body;
        const emailRegx = /\S+@\S+\.\S+/;
        let [emailFlag,userNameFlag,passwordFlag] = [false,false,false];
        //Validate Inputs
        if(!emailRegx.test(email)) emailFlag=true;
        if(userName && userName.trim().length<3) userNameFlag=true;
        if(password && password.trim().length<3) passwordFlag = true;
        if(emailFlag || userNameFlag || passwordFlag) return res.json({message:'Invalid Entry!',emailFlag,passwordFlag,userNameFlag,status:400});
        // Validate Inputs
        // User Exists?
        const findUser = await User.find({email:email});
        if(findUser.length > 0) return res.json({message:`${email} already  exists.`,status:401});
         // User Exists?
        //  create new user 
        const hashedPassword = await bcrypt.hash(password,12)
        const user = new User({
            email:email.toLowerCase(),
            userName,
            password:hashedPassword,
            date:new Date()
        });
        const save = await user.save();
        res.json({message:'Successfully signed up.',save,status:200})
        //  create new user 
        } catch (error) {
            res.json({message:'Server Error!'});
        }
});

router.post('/login', async (req,res)=>{
    try {
        const {email,password} = req.body;
        const findUser = await User.findOne({email});
        if(!findUser) return res.json({message:'Email and Password does not match!',status:401}); 
        const isValidPassword = await bcrypt.compare(password,findUser.password);
        if(!isValidPassword)  return res.json({message:'Email and Password does not match!',status:401});
        res.json({message:'Login successfull!',status:200});
    } catch (error) {
      res.json({message:'Server Error'})  
    }
});

router.get('/allusers', async (req,res)=>{
    try {
        const find = await User.find({},{__v:0,password:0,email:0});
        res.json(find);  
    } catch (error) {
        res.json({message:'Server Error!'});
    }
});

module.exports = router;