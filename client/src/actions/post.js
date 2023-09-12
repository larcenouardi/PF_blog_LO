// REDUX ACTION POST STATE

import * as api from '../api/index';
import {CREATE,FETCH_POST,GET_POST,ALL_POST,UPDATE,DELETE,GET_COMMENT ,COMMENTS,COMMENT,ALL_COMMNET, EDIT_COMMENT} from './types';

// --------------------------- SHOW POST ON HOME PAGE(ACTION) ---------------------

export const getPost = () => async (dispatch) =>{
    try {
        const {data} = await api.getAllPost();
        dispatch({type : FETCH_POST, payload:data})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// ------------------ SHOW ALL POST FOR ADMIN ------------------------

export const adminAllPost = () => async(dispatch) => {
    try {
        const {data} = await api.allPost();
        dispatch({type:ALL_POST, payload:data})
    } catch (error) {
        console.log(error)
    }
}

//  ---------------------- CREATE A NEW POST(ACTION) --------------------------------------
export const createPost = (post) => async(dispatch) =>{
    try {
        const {data}  = await api.createPost(post);
        dispatch({type:CREATE, payload:data})
        alert("Post successfull")
    } catch (error) {
        console.log(error)
        alert('Post failed')
    }
}


// ------------------------ POST DETAILS ACTION -------------------------------

export const getOnePost = (id) => async(dispatch) =>{
    try {
        const {data} = await api.getPost(id);
        dispatch({type:GET_POST, payload:data})
    } catch (error) {
        console.log(error)
    }
}

// ----------------------- UPDATE POST ACTION -----------------------------------

export const updatePost = (id,post) => async(dispatch) => {
    try {
        const  { data } = await api.updatePost(id, post);
        console.log(data)
        dispatch({type : UPDATE, payload: data});
        alert("Post updated successfully..")
    } catch (error) {
        console.log(error);
        alert("Something went wrong! please try again")
    }
}

// ------------------------- DELETE POST ACTION -----------------------------------

export const deletePost = (id) => async(dispatch) => {
    try {
        
       await api.deletePost(id);
       dispatch({type:DELETE, payload:id});
       alert('Post deleted')
    } catch (error) {
        console.log(error);
    }
}


// ----------- CREATE NEW COMMENT (ACTION) -------------------
export const commentPost = (comment) => async(dispatch) =>{
    try {
        
        console.log("action page",comment)
      const{data} =  await api.newComment(comment);

      console.log("data action",data);
      dispatch({type:COMMENT , payload:data})
      alert("Comment has been sent to admin varification.")
    } catch (error) {
        console.log(error);
        alert("fields can't be empty")
    }
}
//-------------------- GET ONLY APPROVED COMMENTS ON BLOGPOST -----------------
export const getComment = (id) => async(dispatch) =>{
    try {
        console.log("getComment id for comment shows",id)
        const {data} = await api.getComment(id);
        dispatch({type:GET_COMMENT, payload:data})
    } catch (error) {
        console.log(error)
    }
    
}

// ------------------------------ GET ONLY NOT-APPROVED COMMENT  --------------------

export const allComment = () => async(dispatch) => {
    try {
        const {data} = await api.allComment();
        
        dispatch({type:ALL_COMMNET, payload:data})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// -------------------- GET ALL COMMENTS ----------------------------
export const comments = () => async(dispatch) =>{
    try {
        const {data} = await api.comments();
        dispatch({type:COMMENTS,payload:data})
    } catch (error) {
        console.log(error);
    }
}



export const editComment  = (id,comment) => async(dispatch) => {
    try {
        const  { data } = await api.editComment(id, comment);
        console.log(data)
        dispatch({type : EDIT_COMMENT, payload: data});
        alert("Comment updated")
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteComment = (id) => async(dispatch) => {
    try {
        
       await api.deleteComment(id);
       dispatch({type:DELETE, payload:id});
       alert('Post deleted')
    } catch (error) {
        console.log(error);
    }
}