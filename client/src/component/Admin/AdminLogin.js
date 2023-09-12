import React,{ useState} from 'react';
import './style.css';

import {login} from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory,Redirect} from 'react-router-dom';

const AdminLogin = () => {
    const history = useHistory();
    const [admin,setAdmin] = useState({
        email:"", password:""
    })

    // ---------------- 
    //const auth = useSelector((state) => state.auth);
    
    
    const dispatch = useDispatch();
    
    let name, value;
    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setAdmin({...admin , [name]:value});
    }

    // ------------- ON SUBMIT DISPATCH STATE TO LOGIN ACTION ---------------------
    const submitData = (e) =>{
        e.preventDefault();
        dispatch(login(admin,history))
    }

    // -------------- CHECK TOKEN AND REDIRECT ---------------
   const user = localStorage.getItem('adminToken');
   if(user){
       return <Redirect to="/dashboard"></Redirect>
   }


    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-md-5 col-12 col-xxl-5 mx-auto my-3">

               <div className="form">
           
                <div className="Headingcontainer">
                    <h2 >Admin</h2>
                </div>

                <div className="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" 
                    name="email"
                    value = {admin.email} 
                    onChange={handleInput}
                    />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" 
                    name="password"
                    value={admin.password}
                    onChange={handleInput}
                    />

                    <button type="submit" onClick={submitData}>Login</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

                <div className="container" >
                    
                    
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}





export default AdminLogin;
