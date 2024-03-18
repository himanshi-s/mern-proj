const User = require("../models/user-model");


const Home = async (req,res)=>{
    try {
        const allUsers = await User.find({});
        // console.log(allUsers);
        res.status(200).send({allUsers});
    } catch (error) {
        console.log(error);
    }
}

const Register = async (req,res)=>{

    try {
        const isExist = await User.findOne({email: req.body.email});
        console.log(isExist);
   if(isExist){
    return res.status(201).send({msg: 'user already present', isExist})
   }

   const newUser = await User.create({username:req.body.username,phone:req.body.phone,email:req.body.email,password:req.body.password})
   return res.status(200).send({msg:'user created.',newUser})
        
    } catch (error) {
        res.status(400).send(`error occured ${error}`)
    }

   
}


module.exports = {Home,Register};