const pool = require("../config/db");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


 const registration = async(req,res) =>{

     const {email, password,cpassword,username,profile} = req.body;
     console.log("req.body",req.body)

    //  Validation --------------
     if(!email || !password || !cpassword || !username || !profile){
        return res.status(422).json({error: "please fill the field properly" });
     }
     try {
        const exitEmail = await pool.query('SELECT * FROM tbl_user WHERE email = $1',[email],(error,results) =>{
            if(error) throw error;
            res.status(422).json({message:"Email is already exits"})
        });
      if(password === cpassword){ 

        //  Password hash using bcrypt method ------------

          const bpassword = await bcrypt.hash(password,12);
          const newUser = await pool.query('INSERT into tbl_user(email,password,username,profile) VALUES($1,$2,$3,$4)',[email,bpassword,username,profile]);
         
          res.status(201).json({message:"Registration Successfull."})
          console.log(newUser.rows)

        }else{
            res.status(422).json({error:"passwords are not matching"})
        }
         
     } catch (error) {
         console.log(error)
     }

}











// ================= USER LOGIN ====================================


const login = async(req,res) =>{
    const {email,password} = req.body;
    console.log(req.body)

    // ------ VALIDATION ------------------
    if(!email || !password){
        res.status(422).json({message:"fill the form correctly"})
    }
    try {
        // -------------CHECK EMAIL EXIST------------------

        const user = await pool.query('SELECT * FROM tbl_user WHERE email=$1',[email])
        const myPassword = user.rows.map((data) => data.password)
        const loginUser = user.rows[0];
       
        if(user.rows){
            // ----------- COMPARE PASSWORD USING BCRYPT METHOD -------------
            const isMatch = await bcrypt.compare(password,myPassword[0])
            if (!isMatch) {
                res.status(400).json({error: "Invalid Credentials " })
            } else {
                const token = jwt.sign({email:loginUser.email, id:loginUser.id},'test')
                res.status(201).json({result:loginUser,token})
                }
    
        }else{
            res.status(400).json({error: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error)
    }
  

}



module.exports = {registration,login}