import { NavLink } from "react-router-dom";
import {useContext, useState} from 'react';
import {toast} from 'react-toastify';

import {AuthContext} from '../..';
import './login.css';
import { getActiveStyle } from "../../utils/getActiveStyle";

export function SignUp(){
  const {userSignup} = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

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
    toast.error('Invalid inputs')
    else if(userDetails.password !== userDetails.confirmPassword)
      toast.error('Password & confirm password not matching');
    else  
      userSignup(userDetails);
  }


    return (
      <div className="login-page">
             
            <form className="form-container">
            <h3><NavLink to="/login" className="login-heading"  style={getActiveStyle}>Login</NavLink> |  <NavLink to="/signup"  className="login-heading"  style={getActiveStyle}>  SignUp</NavLink></h3>

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
                <div className="password-container"> 
                  <input type={isPasswordVisible ? 'text' : "password"} placeholder={isPasswordVisible ? "enter password" : "********"}  required
                   onChange={(e)=> setUserDetails((prev)=> ({...prev, password:e.target.value}))}/>
                  <i className={isPasswordVisible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={()=> setIsPasswordVisible(!isPasswordVisible)}></i>
                </div>
              </label>
               
               
              <label  className="form-input">Confirm password:
               <div  className="password-container"> 
                <input type={isConfirmPasswordVisible ? 'text' : "password"}  placeholder={isConfirmPasswordVisible? "enter password again" : "********"} required
                   onChange={(e)=> setUserDetails((prev)=> ({...prev, confirmPassword:e.target.value}))}/>
                <i className={isConfirmPasswordVisible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={()=> setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}></i>
               </div>
              </label>
              
              <div><button className="btn-primary card-button" onClick={signupHandler}>Register</button></div>
              <NavLink to="/login" className="new-account"> &lt; Have an Account Already </NavLink>
            </form>
    </div>
    )
}