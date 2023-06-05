import { NavLink, useNavigate } from "react-router-dom";
import {useContext, useState} from 'react';
import {AuthContext} from '..';

export function SignUp(){
  const navigate=useNavigate();
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
        <div className="login-container">
             <h3><NavLink to="/login">Login</NavLink> <NavLink to="/signup">/SignUp</NavLink></h3> 
            <form>
            <div>
              <label>First Name:</label>
              <input type="text" placeholder="enter your first name"
                onChange={(e)=> setUserDetails((prev)=> ({...prev, firstName:e.target.value}))}/>
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" placeholder="enter your last name"
                onChange={(e)=> setUserDetails((prev)=> ({...prev, lastName:e.target.value}))}/>
            </div>
              <div>
                <label>Email: </label>
                <input type="text" placeholder="enter your email"
                onChange={(e)=> setUserDetails((prev)=> ({...prev, email:e.target.value}))}/>
                </div>
              <div>
                <label>Password: </label>
                <input type="password" placeholder="enter your password" 
                onChange={(e)=> setUserDetails((prev)=> ({...prev, password:e.target.value}))}/>
                
                </div>
              <div><label>Confirm password: </label>
              <input type="password" placeholder="enter your password"
              onChange={(e)=> setUserDetails((prev)=> ({...prev, confirmPassword:e.target.value}))}/>
              </div>
              <div><button className="btn-primary" onClick={signupHandler}>Register</button></div>
              <div onClick={()=> navigate('/login')} className="new-account">Have an Account Already</div>
            </form>
    </div>
    )
}