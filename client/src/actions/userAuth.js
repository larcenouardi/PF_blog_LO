import * as api from '../api/index';
import {SIGNIN,SIGNUP,LOGOUT} from './types';

// ------------------------------------ USER LOGIN (ACTION) --------------------------------

export const userLogin = (user,history) => async(dispatch ) => {
    try {
        
        const {data} = await api.userLogin(user);
        dispatch({type: SIGNIN, data})
        history.goBack();
    } catch (error) {
        console.log(error)
        alert('Invalid Credential')
    }
}

// ------------------------ USER REGISTRATION (ACTION) ---------------------------------------

export const signup = (formData,history) => async(dispatch) => {
    try {
        //console.log("formData",formData)
        
        const {data} = await api.userRegister(formData)
        console.log("data",data)
        dispatch({type:SIGNUP,payload:data})
        alert('Registration successfull')
        history.push('/login')
        
        
    } catch (error) {
        console.log(error)
        alert("Please fill the form correctly")
    }
}

// ------------------------- LOGOUT(ACTION) ---------------------------------

export const Userlogout = () => dispatch =>  {
    dispatch({type:LOGOUT})
}