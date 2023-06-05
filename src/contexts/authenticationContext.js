import { createContext,useReducer } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';

import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const initialAuth = {
        isLoggedIn: false,
        user:{},
        token:''
    }

    const navigate = useNavigate();


    const [authState, authDispatch] = useReducer(authReducer, initialAuth);


     const userSignup = async (signupData) =>{
        try{
            const {status,data} = await axios.post('api/auth/signup', signupData);
            if(status === 201){
                localStorage.setItem('token', data.encodedToken);
                authDispatch({type:'SET_LOGGEDIN_TRUE', payload: true});
                authDispatch({type:'SET_USER', payload: data.encodedToken});
                authDispatch({type:'SET_TOKEN', payload: data.encodedToken});
                navigate('/');
            }
        }catch(e){
            authDispatch({type:'SET_LOGGEDIN_FALSE', payload: false});
            console.error(e);
        }
     }


    const userLogin = async (loginData) =>{
        try{
            const {status, data} = await axios.post('api/auth/login', loginData);
            if(status === 200){
                localStorage.setItem('token', data?.encodedToken);
                authDispatch({type:'SET_LOGGEDIN_TRUE', payload: true});
                authDispatch({type:'SET_USER', payload: data?.foundUser});
                authDispatch({type:'SET_TOKEN', payload: data?.encodedToken});
                navigate(-1);
                // navigate(location?.state?.from?.pathname ?? "/");
                // navigate(
                //     location?.state?.from?.pathname
                //       ? location?.state?.from?.pathname
                //       : "/"
                //   );
            }
        }catch(e){
            authDispatch({type:'SET_LOGGEDIN_FALSE', payload: false});
            console.error(e);
        }
    }

    const userLogout = () =>{
        localStorage.removeItem('token');
        authDispatch({type:'SET_LOGGEDIN_FALSE', payload: false});
        authDispatch({type:"SET_USER", payload: {}});
        authDispatch({type:'SET_TOKEN', payload: ''});
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{authState, userLogin,userSignup, userLogout}}>
            {children}
        </AuthContext.Provider>
    )
}