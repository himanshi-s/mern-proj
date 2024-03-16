const express = require('express');
const router = express.Router();
const {Home, Register } = require('../controllers/auth-controller')

// router.get('/',(req,res)=>{
//     res.status(200).send(`this is home page`);
// })
router.route('/').get(Home);

// router.get('/register',(req,res)=>{
//     res.status(200).send(`this is register page`);
// })
router.route('/register').post(Register);


module.exports = router;