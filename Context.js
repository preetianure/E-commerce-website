import React,{useState} from 'react';
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    logIn:(token)=>{},
    logOut:()=>{}
});
export const AuthContextProvider=(props)=>{
    const initialvalue=localStorage.getItem('tokens');
    const[token,setToken]=useState(initialvalue);
    const userIsloggedIn=!!token;
    const loginHandler=(token)=>{
        localStorage.setItem('tokens',token); 
        setToken(token)
    }

    const logoutHandler=()=>{
        localStorage.removeItem('tokens');
        setToken(null); 
    }
    const contextValue={
        token:token,
        isLoggedIn:userIsloggedIn,
        logIn:loginHandler,
        logOut:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;