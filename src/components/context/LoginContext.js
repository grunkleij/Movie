import { createContext, useEffect, useState } from "react";

export const LoginContext=createContext();

export const LoginContextProvider=({children})=>{
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return storedToken ? JSON.parse(storedToken) : null;
      });

      const logOut =()=>{
        setToken(null);
      }

      useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
      }, [token]);
    return(
        <LoginContext.Provider value={{token,setToken,logOut}}>
            {children}
        </LoginContext.Provider>
    )
}