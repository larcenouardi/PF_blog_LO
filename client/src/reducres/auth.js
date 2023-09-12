import { ADMIN_LOGIN,USER_LOAD,AUTH_ERROR, LOGIN_FAIL,LOGOUT, FETCH_DASHBOARD} from "../actions/types";

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    loading:true,
    user:null

}

export default function(state=initialState, action){
    const{type,payload} = action;
    switch (type) {
        case USER_LOAD : 
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }
        case ADMIN_LOGIN:
            localStorage.setItem('adminToken',JSON.stringify({...action?.data}))
                return{
                    ...state,
                    ...payload,
                    authData:action?.data,
                    isAuthenticated:true,
                    loading:false
                }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
           localStorage.removeItem("token")
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        case FETCH_DASHBOARD:
            return payload
        default:
            return state
    }
}