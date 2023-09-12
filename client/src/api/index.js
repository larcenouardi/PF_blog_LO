import axios from "axios";

const API = axios.create({baseURL : 'http://localhost:8000'});

// ---------------------- SET TOKEN TO HEADERS FOR BACK END AUTHENTICATION -------------------

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('adminToken')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('adminToken')).token}`
    }
    return req;
})

// ----------------------------------------------------------------------------------

export const getAllPost = () => API.get('/');
export const getPost = (id) =>API.get(`/blogPost/${id}`);
export const signIn = (formData) => API.post('/adminLogin',formData);
export const fetchDashboard = () => API.get('/dashboard');
export const createPost = (newPost) =>API.post('/createPost',newPost);
export const allPost = () => API.get('/allPost');
export const updatePost = (id,updatedPost) => API.patch(`/updatePost/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/deletePost/${id}`,deletePost);
export const userRegister = (formData) => API.post('/register',formData);
export const userLogin = (user) => API.post('/login',user);
export const newComment = (comment) => API.post(`/commentPost`,comment);
export const getComment = (id) => API.get(`/comment/${id}`);
export const allComment = () => API.get('/allComment');
export const comments = () => API.get('/comments');
export const editComment = (id,editComment) => API.patch(`/editComment/${id}`,editComment);
export const deleteComment = (id) => API.delete(`/deleteComment/${id}`,deleteComment);
