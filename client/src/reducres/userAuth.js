import {SIGNIN,SIGNUP,LOGOUT} from '../actions/types';

export default function(state = {authData:null},action) {
    switch (action.type) {
        case SIGNIN:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state, authData:action?.data}
        case SIGNUP:
            return{...state, authData:action?.data};
        case LOGOUT:
                localStorage.clear()
                return{...state, authData:null};
        default:
            return state
    }
}