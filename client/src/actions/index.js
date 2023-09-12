import { ADMIN_LOGIN ,AUTH_ERROR,USER_LOAD,LOGIN_FAIL,FETCH_DASHBOARD,LOGOUT} from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

import * as api from '../api/index';


const url = 'http://localhost:8000';

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }try {
        const res = await axios.get('/url/adminLogin');
        dispatch({
            type:USER_LOAD,
            payload:res.data
        })

    } catch (error) {
        dispatch({
            type:AUTH_ERROR
        })
    }
}

// -------------------- Dashboard ----------------------------

export const fetchDashboard = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchDashboard();
        dispatch({
            type:FETCH_DASHBOARD,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
   
}

// ----------------------------- ADMIN LOGIN (ACTION) -------------------------

export const login = (admin,history) => async(dispatch) =>{
    try {

        const {data} = await api.signIn(admin);
        console.log("index action data",data);
        dispatch({type:ADMIN_LOGIN, data})
        history.push('/dashboard')
    } catch (error) {
        console.log(error)
        alert('Invalid Credential')
    }
}




export const logout = () => dispatch =>  {
    const token = localStorage.removeItem('token')
    dispatch({type:LOGOUT, token})
}