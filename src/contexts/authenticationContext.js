import { createContext,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin =()=>{
        setIsLoggedIn(!isLoggedIn);
        navigate(location.state?.from.pathname);
    }
    
    return (
        <AuthContext.Provider value={{handleLogin, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}