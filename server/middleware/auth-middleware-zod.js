const validate = (userSchema) => async (req,res,next) =>{
    try {
        const user = await userSchema.parseAsync(req.body);
        console.log(`validate function - ${user}`);
        req.body = user;
        next();
        
    } catch (err) {
        const msg = err.errors[0].message;
        // res.status(400).send({msg});
        const erro = {
            message:msg,
            status: 422
        }
        console.log(`${erro}`);
        next(erro);
    }
}

module.exports= validate;