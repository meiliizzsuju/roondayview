import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const RequireAuthAdmin = ({children}) => {
    const location = useLocation()
    const auth = useAuth()
    
    if(auth.userAdmin === false) {
        return <Navigate to= '/login-admin' state={{ path: location.pathname}} />
    }

    return children
}
