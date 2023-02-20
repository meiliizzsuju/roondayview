import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

export const NavBar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    console.log(navLinkStyles)

    const auth = useAuth()

  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to='/'>
            Home
        </NavLink>
        <NavLink style={navLinkStyles} to='/blog'>
            Blogs
        </NavLink>
        <NavLink style={navLinkStyles} to='/contact'>
            Contact
        </NavLink>
        <NavLink style={navLinkStyles} to='/staff'>
            Staff
        </NavLink>
        <NavLink style={navLinkStyles} to='/reservation'>
            Reservations
        </NavLink>
        <NavLink style={navLinkStyles} to='/Admin'>
            Admin
        </NavLink>
        <NavLink style={navLinkStyles} to='/profile'>
            Profile
        </NavLink>
        {!auth.user  && (
           <NavLink style={navLinkStyles} to='/log-in'>
           Login
           </NavLink>  
        )}
    </nav>
  )
}
