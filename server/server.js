require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { exit } = require('node:process');
const router = require('./routes/auth-router')
const connectDB = require('./utils/db');
const ErrorMiddleware  = require('./middleware/error-middleware');
const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    methods: ["GET","POST","PUT","DELETE","PATCH","HEAD"] 
}))
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.status(200).send(`home page`)
// })
app.use('/api/auth',router);

//JUST BEFORE CONNECTION ERROR MIDDLEWARE
app.use(ErrorMiddleware);

const PORT = 5555;
connectDB().then(() => {
    app.listen(PORT,(req,res)=>{
        console.log(`server running at port ${PORT}`);
    })
})
