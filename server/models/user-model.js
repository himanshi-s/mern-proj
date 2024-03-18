const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    phone: {
        type:Number,
        required: true,
    },
    isAdmin: {
        type:Boolean,
        default:false
    }

})


//pre method
userSchema.pre("save",async function(next){
    // const user = this;
    if(!this.isModified("password")){
        next();
    }
    try {
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(this.password,salt)
        this.password = hashedPass;
        
    } catch (error) {
        next(error)
    }
})

const User = new mongoose.model("User",userSchema);

module.exports = User;