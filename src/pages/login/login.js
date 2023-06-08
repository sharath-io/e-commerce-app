import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../..";
import './login.css';

export function Login(){
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);

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
      console.log('enter valid input');
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
            <h3><NavLink to="/login">Login</NavLink> <NavLink to="/signup">/SignUp</NavLink></h3>

            <label className="form-input">Email:
            <input type="text" placeholder=" testuser@gmail.com"
              onChange={(e)=> setUserData((prev)=> ({...prev,email:e.target.value}))} required/> </label>
            <label    className="form-input">Password:
            <input type="password" placeholder=" ************"
            onChange={(e)=> setUserData((prev)=> ({...prev,password:e.target.value}))} required/> </label>
            <button className="btn-primary card-button" onClick={loginHandler}>Login</button>
            <button onClick={loginAsGuestHandler} className="card-button">Login as a guest user</button>
            <p onClick={()=> navigate('/signup')} className="new-account">New account &gt;</p>
        </form>
      </div>
    )
}