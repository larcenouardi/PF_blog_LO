
const pool = require("../config/db")
const { validationResult} =  require ('express-validator');
const jwt = require("jsonwebtoken");
require('dotenv').config();


if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}


const adminLogin = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    try {
        const {email, password} = req.body;
        console.log(req.body)
        const user = await pool.query('SELECT * FROM admin WHERE email=$1',[email])
        console.log(user.rows)
        const myPassword = user.rows.map((data) => data.password)
        const loginUser = user.rows[0];
       
        if(loginUser){
            console.log("loginUser", loginUser)
            if (loginUser.email !== email || loginUser.password !== password) {
                res.status(400).json({error: "Invalid Credentials " })
            } else {
                const token = jwt.sign({email:loginUser.email, id:loginUser.id},'myscretetoken') //SECRETE KEY
                res.status(201).json({result:loginUser,token})
                }
    
        }else{
            res.status(400).json({error: "Invalid Credentials" });
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json("server error")
    }
    
}


const dashboard = async(req,res) =>{
   try {
     const admin  = await pool.query('SELECT email FROM admin WHERE id=$1',[req.user.id])
     console.log(admin.rows)
     res.json(admin.rows)
   } catch (error) {
       console.log(error)
       res.status(500).json('Server error')
   }
}

module.exports = {adminLogin,dashboard}