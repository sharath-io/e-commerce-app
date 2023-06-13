import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify';

import { AuthContext } from "../..";
import './login.css';
import { getActiveStyle } from "../../utils/getActiveStyle";

export function Login(){
  const { userLogin } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const guestUserData = {
    email: "testUser@gmail.com",
    password: "testUser@123",
  };

  const loginHandler =(e) =>{
    e.preventDefault();
    if(!userData.email.trim() || !userData.password.trim()){
      toast.error('Enter valid input');
    }else userLogin(userData);

  }

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    userLogin(guestUserData);
  };

  
    return (
      <div className="login-page">
  
        <form className="form-container">
            <h3><NavLink to="/login" className="login-heading"  style={getActiveStyle}>Login</NavLink> |  <NavLink to="/signup"  className="login-heading"  style={getActiveStyle}> SignUp</NavLink></h3>

            <label className="form-input">Email:
            <input type="text" placeholder=" testuser@gmail.com" value={userData.email}
              onChange={(e)=> setUserData((prev)=> ({...prev,email:e.target.value}))}/> </label>
              
            <label className="form-input">Password:
              <div className="password-container"> 
                <input type={isPasswordVisible ? 'text' : "password"} placeholder={isPasswordVisible ? "enter password" : "********"} value={userData.password}
                 onChange={(e)=> setUserData((prev)=> ({...prev,password:e.target.value}))}/>
                 <i className={isPasswordVisible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={()=> setIsPasswordVisible(!isPasswordVisible)}></i>
              </div>
            </label>

            <button className="btn-primary card-button" onClick={loginHandler}>Login</button>
            <button onClick={loginAsGuestHandler} className="card-button">Login as a guest user</button>
            <NavLink to="/signup" className="new-account"> New account &gt; </NavLink>
        </form>
      </div>
    )
}