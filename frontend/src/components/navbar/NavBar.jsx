import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth'
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import './navbar.css';

const Menu = (navLinkStyles) =>{
    const auth = useAuth()

    return (
        <nav className='primary-nav'>
            <ul>
                <li>
                    <NavLink style={navLinkStyles} to='/blog'>
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink style={navLinkStyles} to='/contact'>
                        Contact
                    </NavLink>
                </li>
                {/* Future Features to be released */}
                {/* <li>
                    <NavLink style={navLinkStyles} to='/staff-user'>
                        Staff
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink style={navLinkStyles} to='/reservation'>
                        Reservations
                    </NavLink>
                </li> */}
                {/* Only admin should be allow to see the link */}
                {
                    auth.userAdmin === true &&
                    <li>
                        <NavLink style={navLinkStyles} to='/admin'>
                            Admin
                        </NavLink>
                    </li>
                }
                {!auth.user  ? (
                    <li>
                        <NavLink style={navLinkStyles} to='/login'>
                        Login
                        </NavLink>  
                    </li>
                ):(
                    <li>
                        <NavLink style={navLinkStyles} to='/profile'>
                            Profile
                        </NavLink>
                    </li>
                )}

            </ul>
        </nav>
    )
}

export const NavBar = () => {
    const [open, setState] = useState(false);

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const toggleDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        //changes the function state according to the value of open
        setState(open);
    };


  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="lg" >
        <div className='navbar__container'>
            <NavLink style={navLinkStyles} to='/' >
                Home
            </NavLink>


            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                mr: 2,
                display: {
                    xs: "block",
                    md: "none"
                }
                }}
                className="navbar__button"
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                onOpen={toggleDrawer(true)}
            >
                <Box
                sx={{
                    p: 2,
                    height: 1,
                    backgroundColor: "#fff"
                }}
                >
                <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>

                <Box sx={{ mb: 2 }}>
                    <Menu
                        navLinkStyles={navLinkStyles}
                    />
                </Box>

                </Box>
            </Drawer>

            <Box 
                sx={{ 
                    display: {
                        xs: "none",
                        md: "block"
                    }
                }}
            >
                <Menu
                    navLinkStyles={navLinkStyles}
            />
            </Box>
        </div>
      </Container>
    </AppBar>
  )
}
