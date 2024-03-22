const User = require("../models/user-model");


const Home = async (req,res)=>{
    try {
        const allUsers = await User.find({});
        console.log(allUsers);
        res.status(200).send({count: allUsers.length,data: allUsers});
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

    res.status(200).send({msg:'user created.', token: await newUser.generateToken(),userid: newUser._id.toString()})
        
    } catch (error) {
        res.status(400).send(`registration error occured ${error}`)
    }

   
}

const Login = async(req,res) => {
    try {
        const {email,password} =req.body;
        const isExist = await User.findOne({email});
        if(!isExist){
           return res.status(400).send(`please register first.`)
        }
        //check if credentials are valid.
        const validUser = await isExist.decryptPassword(password);
        if(!validUser){
            return res.status(400).send(`invalid login email or password..`)
        }

        return res.status(201).send({msg:'login successful', token: await isExist.generateToken(),userid: isExist._id.toString()});
    } catch (error) {
        res.status(400).send(`error occured ${error}`)
    }
}


module.exports = {Home,Register,Login};