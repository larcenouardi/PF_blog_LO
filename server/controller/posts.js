const pool = require("../config/db");

//---------------------- GET ONLY PUBLISHED POST FOR HOME PAGE ----------------------
const getAllPost = async(req,res) =>{
    let published = "published";
    try {
       const data = await pool.query('SELECT * FROM tbl_post WHERE status=$1 ORDER BY id DESC',['published'])  
        res.status(200).json(data.rows);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Error while fetching posts list"})
    }
}

//---------------------------- CREATE NEW POST --------------------------

const createPost = async(req,res) =>{
    try {
        const{title,content,tags,status,image_path} = req.body;
        //console.log(req.body)
        if(!title || !content || !status ){
            res.status(500).json({message:"Fields can't be an empty"})
        }else{
            await  pool.query('INSERT INTO tbl_post(title,content,tags,status,image) VALUES($1,$2,$3,$4,$5)',[title,content,tags,status,image_path])
            console.log("data inserted successfully");
            res.status(200).json({message:"data inserted successfully"})
        }
       
       
        

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// ---------------------------- SINGLE POST FOR POST DETAILS -------------

const getPost = async(req,res) =>{
    const id = req.params.id;

    try {
        const data =  await pool.query('SELECT * FROM tbl_post WHERE id = $1',[id])
        res.status(200).json(data.rows)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
  
}

// ------------------------ ALL POST FOR ADMIN --------------------

const allPost = async(req,res) =>{
    try {
        const data = await pool.query('SELECT * FROM tbl_post ORDER BY id DESC')
        
        res.status(200).json(data.rows)
    } catch (error) {
        res.status(500).json(error)
    }
}

// ----------------------- UPDATE POST API -------------------

const updatePost = async(req,res) =>{
     const id = req.params.id;
    const {title,content,tags,status,image_path} = req.body;
    console.log(req.body)
    try {
        const data = await pool.query('UPDATE tbl_post SET title=$1,content=$2,tags=$3,status=$4,image=$5 WHERE id=$6',[title,content,tags,status,image_path,id]);
        res.status(200).json({message:"Blog updated successfully"});
        console.log("Blog updated successully");
    } catch (error) {
        res.status(500).json(error)
    }

}
 
// -------------------------- DELETE POST API -----------------------

const deletePost = async(req,res) =>{
    const id = req.params.id;

    try {
        await pool.query('DELETE FROM tbl_post WHERE id = $1',[id])
    
        res.status(200).json({message:"Post deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

// ------------------- ADD NEW COMMENT API -----------------

const commentPost = async(req,res) =>{
     

    const{content,status,author,url,userId,postId} = req.body;
   
    try {
        if(!content || !author || !userId){
            res.status(422).json({message:"Fields can't be empty"})
        }else{
            await pool.query('INSERT INTO tbl_comment(content,status,author,url,user_id,post_id) VALUES($1,$2,$3,$4,$5,$6)',[content,status,author,url,userId,postId]);
            console.log("comment inserted successfully");
            res.status(200).json({message:"Comment has send to admin varification. Thank you for your comment"})
        }
    } catch (error) {
        console.log(error)
    }
    
}

// ------------------------------- GET ONLY APPROVED COMMENT API -----------------------

const getComment = async(req,res) => {
    const id = req.params.id;
    const status = "approved";
    try {
        const data =  await pool.query('SELECT * FROM tbl_comment WHERE post_id = $1 and status=$2 ORDER BY id DESC',[id,status])
        
        res.status(200).json(data.rows)
    } catch (error) {
        console.log(error)
    }
    
}

// ---------------------------------------- GET ALL COMMENTS -------------------------------
const comments = async(req,res) =>{
    const status = "approved";
   try {
       const data = await pool.query('SELECT * FROM tbl_comment WHERE status=$1',[status]);
       res.status(200).json(data.rows)
       
   } catch (error) {
       console.log(error)
   }
}

// -------------------- Show all not approved comments for admin verification only ---------------------

const allComment = async(req,res) => {
    const status = "not approved";
    try {
        const data =  await pool.query('SELECT * FROM tbl_comment WHERE  status=$1 ORDER BY id DESC',[status])
        res.status(200).json(data.rows)
    } catch (error) {
        console.log(error)
    }
}


const editComment = async(req,res) => {
    const id = req.params.id;
    const {status} = req.body;
    try {
        const data = await pool.query('UPDATE tbl_comment SET status=$1 WHERE id=$2',[status,id]);
        res.status(200).json(data.rows);
        console.log("Comment updated successully");
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteComment = async(req,res) =>{
    const id = req.params.id;

    try {
        await pool.query('DELETE FROM tbl_Comment WHERE id = $1',[id])
        res.status(200).json({message:"Comment deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = {getAllPost,createPost,getPost,allPost,updatePost,deletePost, commentPost,getComment,allComment,editComment,deleteComment,comments}