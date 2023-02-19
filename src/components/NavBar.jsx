import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }
    console.log(navLinkStyles)

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
    </nav>
  )
}
