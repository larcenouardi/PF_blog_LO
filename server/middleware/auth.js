const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req,res,next){
    // get the token from header
    const token = req.header('x-auth-token');

    console.log("auth token",token)
    
    // check token if not exits

    if(!token){
        return res.status(401).json({msg:"No token, Authorization denied"})
    }

    // verify token
    try {
        const decoded = jwt.verify(token,'myscretetoken');
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg:"Token is not valid"});
    }
    next()
}