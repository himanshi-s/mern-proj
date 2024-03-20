// const userSchema = require("../validators/auth-validator")

const validate = (userSchema) => async (req,res,next) =>{
    try {
        const user = await userSchema.parseAsync(req.body);
        console.log(`validate function - ${user}`);
        req.body = user;
        next();
        
    } catch (error) {
        res.status(400).send({msg:error});
    }
}

module.exports= validate;