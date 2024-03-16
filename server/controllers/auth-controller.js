

const Home = (req,res)=>{
    try {
        res.status(200).send(`this is home page`);
    } catch (error) {
        console.log(error);
    }
}

const Register = (req,res)=>{
    try {console.log(req.body);
        res.status(200).send({message: req.body});
    } catch (error) {
        console.log(error);
    }
}


module.exports = {Home,Register};