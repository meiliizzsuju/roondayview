import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth =useAuth()
    
    if(!auth.user) {
        return <Navigate to= '/log-in' state={{ path: location.pathname}} />
    }

    return children
}
