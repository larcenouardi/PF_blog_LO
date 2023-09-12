import { combineReducers } from "redux";
import auth from '../reducres/auth';
import post from './post';
import userAuth from "./userAuth";
import comment from "./comment";


export default combineReducers({ auth,post,userAuth,comment})