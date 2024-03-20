const express = require('express');
const router = express.Router();
const {Home, Register,Login } = require('../controllers/auth-controller')
const validate = require('../middleware/auth-middleware-zod')
const signupSchema =require('../validators/auth-validator')

// router.get('/',(req,res)=>{
//     res.status(200).send(`this is home page`);
// })
router.route('/').get(Home);

// router.get('/register',(req,res)=>{
//     res.status(200).send(`this is register page`);
// })
router.route('/register').post(validate(signupSchema),Register);

router.route('/login').post(Login);

module.exports = router;