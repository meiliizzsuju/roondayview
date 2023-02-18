import React from 'react';
import './Navbar.css'

const NavBar = ({pageName}) => {
    return (
      <div className="navbar">
        <div className="navbar__left">
          {pageName}
        </div>
        <div className="navbar__right">
          <ul>
            <li>
              <a href="/home">Home</a>
              <a href="/blogs">Blogs</a>
              <a href="/login">Login</a>
              <a href="/singup">Signup</a>
              <a href="/contact">Contact</a>
              <a href="/reservations">Reservations</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

// named export — can have many named export - asuppose to default export
export default NavBar;
