import { useState, useContext, createContext, useEffect } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ userAdmin, setUserAdmin ] = useState(false);


    const login = user => {
        setUser(user)
    }
    
    const loginAdmin = user => {
        setUserAdmin(true)
    }

    const logout = () => {
        // cleanup when logout
        setUser(null)
        localStorage.removeItem('auth-token')
        localStorage.removeItem('user')
        localStorage.removeItem('username')
        setUserAdmin(false)
    }
    
    useEffect(()=>{
        // keep login detail on localStorage to prevent auth lost when page refresh

        if (localStorage.getItem('username')) {
            setUser(localStorage.getItem('username'));
            // set admin
            if(localStorage.getItem('user')==='admin'){
                setUserAdmin(true)
            } else{
                setUserAdmin(false)
            }
        }

    },[])


    return (
            <AuthContext.Provider value={{ user, userAdmin, login, logout, loginAdmin }}>
                {children}
            </AuthContext.Provider>
            )   
}

export const useAuth = () => {
    return useContext(AuthContext)
}
