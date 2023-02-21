import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import './navbar.css';

const Menu = (navLinkStyles,auth) =>{
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
                <li>
                    <NavLink style={navLinkStyles} to='/staff'>
                        Staff
                    </NavLink>
                </li>
                <li>
                    <NavLink style={navLinkStyles} to='/reservation'>
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink style={navLinkStyles} to='/Admin'>
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink style={navLinkStyles} to='/profile'>
                        Profile
                    </NavLink>
                </li>
                {!auth.user  && (
                    <li>
                        <NavLink style={navLinkStyles} to='/log-in'>
                        Login
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

    console.log(open)

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

    const auth = useAuth()

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="lg" disableGutters="true">
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
                <IconButton sx={{ mb: 2 }}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>

                <Box sx={{ mb: 2 }}>
                    <Menu
                        navLinkStyles={navLinkStyles}
                        auth={auth}
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
                    auth={auth}
            />
            </Box>
        </div>
      </Container>
    </AppBar>
  )
}
