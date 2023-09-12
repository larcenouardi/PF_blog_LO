import React,{useState} from 'react'
import { Link,useHistory ,Redirect} from 'react-router-dom';
import {signup} from '../../actions/userAuth';
import { useSelector,useDispatch } from 'react-redux';


const Registration = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setformData] = useState({
       username:"", email:"",password:"",cpassword:"",profile:""
    })
    const auth = useSelector((state) => state.userAuth);
    let name, value;
    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setformData({...formData, [name]:value})
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(signup(formData,history))
    }

    // GET TOKEN FOR AUTHENTICATION 
    const loginUser = localStorage.getItem('profile');
    if(loginUser){
        return <Redirect to="/"></Redirect>
    }

    return (
        <> 
            <div className="signup_bg">
            <div className="container ">
            <div className="row">
                <div className="col-md-5 col-12 col-xxl-5 mx-auto">
                <div class="container  px-4 form_container" >
                    <h1 className="text-center">Sign Up</h1>
                   
                    <hr/>
                    <label for="username">Username <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInput}
                     />
                    
                    <label for="email">Email <span className="text-danger">*</span></label>
                    <input type="text" placeholder="Enter Email" 
                    name="email"
                    value = {formData.email}
                    onChange={handleInput} 
                    required />
                    <div className="row">
                        <div className="col-md-6 col-12 col-xxl-6">
                            <label for="psw">Password</label>
                            <input type="password" placeholder="Enter Password"
                             name="password"
                             value={formData.password}
                             onChange={handleInput} 
                            />
                        </div>
                        <div className="col-md-6 col-12 col-xxl-6">
                            <label for="psw-repeat">Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" 
                            name="cpassword"
                            value={formData.cpassword} 
                            onChange={handleInput}
                            />
                        </div>
                    </div>
                    <label for="profile">Profile</label>
                    <input type="text" placeholder="Enter Profile" 
                    name="profile"
                    value={formData.profile} 
                    onChange={handleInput}
                     />

                    <div class="clearfix">
                   
                    <button type="submit" onClick={handleSubmit} class="signupbtn">Sign Up</button>
                    </div>
                    <p>Already have an account <Link to="/login" style={{color:"dodgerblue"}}>Login Here</Link>.</p>
                </div>

                </div>
            </div>
 
         </div>

         </div>
        </>
    )
}

export default Registration
