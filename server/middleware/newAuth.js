
const jwt = require('jsonwebtoken')

// --------------- MIDDLEWARE ---------------------------

const newauth = async(req,res,next) =>{

    try {
        console.log(req.headers)
        let token = req.headers.authorization.split(" ")[1];
        console.log("token headers",token)
        //const isCustomAuth = token.length < 500;

        
       let decodedData = jwt.verify(token,'myscretetoken');
        req.userId = decodedData ?.id;
       
        next();
    } catch (error) {
        console.log(error)
        res.send({message:"token validation failed"})
    }
}


module.exports = newauth