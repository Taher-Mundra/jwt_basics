const {unauthorizedError} = require("../errors");
const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req,res,next) => {
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new unauthorizedError("no token")
    }
    const authToken = authHeader.split(' ')[1]
    try {
        const decode = jwt.verify(authToken,process.env.JWT_SECRET)
        const {id,username} = decode;
        req.user = {id,username};
    } catch (error) {
        console.log(error)
        throw new unauthorizedError('Acces is no longer available');
    }
    next();
}
module.exports = authenticationMiddleware;