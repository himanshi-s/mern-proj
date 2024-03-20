const {z} = require('zod');


//creating schema
const signupSchema = z.object({
    username: z.string({
        required_error: "Name is required",
        invalid_type_error: "username must be a string",
    })
    .trim()
    .min(3,"name should be atleast 3 characters long.")
    .max(255,{message :"name must be less than 255 chars"}),

    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }),
    phone: z.number({
        required_error: "Number is required",
        invalid_type_error: "Number must be a number",
    }),
})
module.exports = signupSchema