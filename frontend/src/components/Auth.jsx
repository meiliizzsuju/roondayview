import { useState, useContext, createContext, useEffect } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ userAdmin, setUserAdmin ] = useState(false);


    const login = user => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('auth-token')
        localStorage.removeItem('user')
    }

    useEffect(()=>{
        if(localStorage.getItem('user')==='admin'){
            setUserAdmin(true)
        } else{
            setUserAdmin(false)
        }
    },[user])


    return (
            <AuthContext.Provider value={{ user, userAdmin, login, logout }}>
                {children}
            </AuthContext.Provider>
            )   
}

export const useAuth = () => {
    return useContext(AuthContext)
}
