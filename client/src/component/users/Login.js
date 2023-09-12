import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {userLogin} from '../../actions/userAuth';
import { useHistory,Redirect } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

const Login = () => {
    const [user, setUser] = useState({
        email:"", password:""
    })

    //const auth = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();
    const history = useHistory();

    let name, value;
    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value});
    }

    const submitLogin = (e) =>{
        e.preventDefault()
        dispatch(userLogin(user,history))
        
    }
// ----------------- GET TOKEN FOR AUTHENTICATION -----------------
    const loginUser = localStorage.getItem('profile');
    if(loginUser){
        return <Redirect to="/"></Redirect> 
    }
    return (
        <>
        <div className="signup_bg">
             <div className="container ">
            <div className="row my-5">
                <div className="col-md-5 col-12 col-xxl-5 mx-auto">
                <div class="container  px-4 form_container" >
                    <h1 className="text-center">Sign In</h1>
                   
                    <hr/>
                   
                    
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter Email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleInput}
                    />
                    <label for="psw">Password</label>
                    <input type="password" placeholder="Enter Password" 
                    name="password" 
                    value={user.password}
                    onChange={handleInput}
                     />
                 
                   

                    <div class="clearfix">
                        <button type="submit" onClick={submitLogin} class="signupbtn">Login</button>
                    </div>
                    <p>Don't have an accout <Link to="/register" style={{color:"dodgerblue"}}>Register Here</Link>.</p>
                </div>

                </div>
               </div>
             </div>
             </div>
        </>
    )
}

export default Login
