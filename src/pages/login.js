import { useContext, useState } from "react";
import { AuthContext } from "..";
import { NavLink, useNavigate } from "react-router-dom";

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
        <div className="login-container">
             <h3><NavLink to="/login">Login</NavLink> <NavLink to="/signup">/SignUp</NavLink></h3> 
            <form>
              <div>
                <label>Email: </label>
                <input type="text" placeholder="enter your email" 
                 onChange={(e)=> setUserData((prev)=> ({...prev,email:e.target.value}))} required/></div>
              <div>
                <label>Password: </label>
                <input type="password" placeholder="enter your password"
                  onChange={(e)=> setUserData((prev)=> ({...prev,password:e.target.value}))} required/></div>
              <div><button className="btn-primary" onClick={loginHandler}>Login</button></div>
              <div><button onClick={loginAsGuestHandler}>Login as a guest user</button></div>
              <div onClick={()=> navigate('/signup')} className="new-account">New account</div>
            </form>
    </div>
    )
}