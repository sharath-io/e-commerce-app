import { NavLink } from "react-router-dom";
import {useContext, useState} from 'react';

import {AuthContext} from '../..';
import './login.css';

export function SignUp(){
  const {userSignup} = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: ''
  });

  const signupHandler= (e) =>{
    e.preventDefault();
    if(!userDetails?.firstName.trim()  ||
       !userDetails?.lastName.trim()  ||
       !userDetails?.email.trim()  ||
       !userDetails?.password.trim()  ||
       !userDetails?.confirmPassword.trim()
    )
    console.log('Invalid inputs')
    else if(userDetails.password !== userDetails.confirmPassword)
      console.log('Password & confirm password not matching');
    else  
      userSignup(userDetails);
  }


    return (
      <div className="login-page">
             
            <form className="form-container">
              <h3><NavLink to="/login">Login</NavLink><NavLink to="/signup">/SignUp</NavLink></h3>
            
              <label className="form-input">First Name:
              <input type="text" placeholder="enter your first name" required
                onChange={(e)=> setUserDetails((prev)=> ({...prev, firstName:e.target.value}))}/></label>
            
              <label  className="form-input">Last Name:
              <input type="text" placeholder="enter your last name" required
                onChange={(e)=> setUserDetails((prev)=> ({...prev, lastName:e.target.value}))}/></label>
            
              <label  className="form-input">Email:
              <input type="text" placeholder="enter your email" required
                onChange={(e)=> setUserDetails((prev)=> ({...prev, email:e.target.value}))}/></label>
                
              <label  className="form-input">Password: 
              <input type="password" placeholder="enter your password"  required
                onChange={(e)=> setUserDetails((prev)=> ({...prev, password:e.target.value}))}/></label>
               
              <label  className="form-input">Confirm password: 
              <input type="password" placeholder="enter your password" required
              onChange={(e)=> setUserDetails((prev)=> ({...prev, confirmPassword:e.target.value}))}/></label>
              
              <div><button className="btn-primary card-button" onClick={signupHandler}>Register</button></div>
              <p className="new-account"><NavLink to="/login"> &lt; Have an Account Already </NavLink></p>
            </form>
    </div>
    )
}