const { notFoundError } = require("../errors");
const CustomAPIError = require("../errors/custom-error");
const jwt = require('jsonwebtoken');

const login = (req,res) => {
    console.log(req.body);
    const {username,password} = req.body;

    if(!username || !password){
        throw new notFoundError("username or password was not provided")
    }
    const id = new Date().getDate();
    const signedToken = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: '30d'})
    res.status(200).send({msg: "logged in succesfully",token: signedToken})
}

const dashboard = (req,res) => {


    const n = Math.random();
    res.status(200).send({msg: `hello ${req.user.username}`,secret: `your random number is ${n}`})
}

module.exports = {login,dashboard};