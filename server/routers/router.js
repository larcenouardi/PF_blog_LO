
const express = require('express');
const {adminLogin,dashboard, } = require('../controller/admin.js');
const {getAllPost, createPost,updatePost,getPost,allPost,deletePost,commentPost,getComment,allComment,editComment,deleteComment,comments} = require('../controller/posts.js');
const {registration,login}  = require('../controller/user.js');
const {check} =  require ('express-validator');
// const auth = require('../middleware/auth');
const newAuth = require('../middleware/newAuth');

const router = express.Router();

//  ------------------------------------- Admin Page router ---------------------

router.post('/adminLogin',[
    check('email', 'Please include a valid email').isEmail(), 
    check('password','Please include a password with 5 or more character').exists()],adminLogin);

router.get('/dashboard',newAuth, dashboard);


router.get('/adminlogout',(req,res) =>{

    localStorage.removeItem("token");
    res.status(201).send("user logout successully");
    console.log("Admin logout successfully");

})

router.get('/allPost',allPost);

// -------------------------- Post crud page router -------------------------------
router.post('/createPost',newAuth,createPost);
router.patch('/updatePost/:id',newAuth, updatePost);
router.delete('/deletePost/:id',newAuth, deletePost);


// ------------------ Home page and blogpost ------------------
router.get('/',getAllPost);
router.get('/blogPost/:id',getPost);


// ---------------------------- COMMENT ROUTER ----------------------------------------

router.post('/commentPost', commentPost);
router.get('/comment/:id',getComment);
router.get('/allComment', allComment);

// ---------------------------- COMMENT EDIT ---------------------------------------
router.patch('/editComment/:id',newAuth,editComment);
router.delete('/deleteComment/:id',deleteComment);

router.get('/comments',comments);

// ----------------------- USER REGISTRATION AND LOGIN -------------------------------------

router.post('/register',registration);
router.post('/login',login)













module.exports = router;