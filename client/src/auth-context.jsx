import React, { createContext, useContext, useState } from 'react'

export const Authcontext = createContext();

export const AuthProvider = ({children}) =>{

    const [token,setToken] = useState(localStorage.getItem('token'));

    const StoreTokenInLS = (serverToken) =>{
        return localStorage.setItem('token',serverToken);
    };
    let isLoggedIn= !!token;
    //logout func
    const RemoveTokenFromLS = () =>{
        setToken("")
        return localStorage.removeItem('token');
    };

    return (
        <Authcontext.Provider value={{StoreTokenInLS,RemoveTokenFromLS,isLoggedIn}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuthContext = () =>{
    const val = useContext(Authcontext);
    if(!val)
        throw new Error("can not get context from Authcontext.")
    return val;
} 
