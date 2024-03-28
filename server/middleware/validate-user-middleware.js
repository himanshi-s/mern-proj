import User from '../models/user-model';

const jwt = require('jsonwebtoken');

const validateUser = (req,res,next) => {

    let token  = req.header("Authorization")
    if(!token){
        res.status(401).json({msg:'token not provided.'});
    }
    token = token.replace("Bearer","").trim();

  try {
    const isVerified = jwt.verify(token,process.env.JWTSECRETCODE)
    const user=User.findOne({email:isVerified.email}).select({password:0});
    req.user = user;
    res.status(200).send({msg:'user sent.'});
    next();
  } catch (error) {
    res.status(400).json({msg:error});
  }
}

export default validateUser;