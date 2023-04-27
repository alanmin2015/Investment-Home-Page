import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';

function Header() {

    return (
      <header>
         <img class="logo" id="logo" src={logo} alt="Logo" height="100px" />
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/philosophy">Philosophy</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
      </header>
    );
    
  }
  export default Header;
