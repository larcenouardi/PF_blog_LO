import React,{useEffect} from 'react';
import AdminLogin from './component/Admin/AdminLogin';
import Navbar from './component/Admin/Navbar';
import {Switch, Route} from "react-router-dom";
import Dashboard from './component/Admin/Dashboard';

import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/index';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './component/routing/PrivateRouting';
import Posts from './component/posts/Posts';
import CreatePost from './component/posts/CreatePost';
import UpdatePost from './component/posts/UpdatePost';
import BlogPost from './component/posts/BlogPost';
import Error from './component/Error';
import AllPost from './component/Admin/AllPost';
import Registration from './component/users/Registration';
import Login from './component/users/Login';
import CommentEdit from './component/Admin/CommentEdit';
import Footer from './component/Footer';


if(localStorage.token){
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
       store.dispatch(loadUser())
    }, [])
    
    return (
        <> 
        <Provider store={store}>
        <Navbar/>
         <Switch>
         <Route exact path="/" component={Posts} ></Route>
         <Route path="/blogPost/:id" component={BlogPost}></Route>
         <Route exact path="/adminLogin" component={AdminLogin}></Route>  
         <PrivateRoute path="/dashboard"  component={Dashboard}></PrivateRoute>
         <PrivateRoute path="/allPost" component={AllPost} ></PrivateRoute>
         <PrivateRoute path="/createPost" component={CreatePost}></PrivateRoute>
         <PrivateRoute path="/commentEdit" component={CommentEdit}></PrivateRoute>
         <Route path="/register" component={Registration}></Route>
         <Route path="/login" component={Login}></Route>
      
         <Route component={Error}></Route>

        </Switch>
        <Footer/>
        </Provider>
            
        </>
    )
}

export default App
