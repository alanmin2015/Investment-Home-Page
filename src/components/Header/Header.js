import React from 'react';
import './Header.css';
import logo from '../../image/logo.png';

function Header() {

    return (
      <header>
    <img class="logo" id="logo" src={logo} alt="Logo"  />
    <nav>
      <ul>
        <li>
        <a href="#Home">Home</a>
        </li>
        <li>
        <a href="#About">About Us</a>
        </li>
        <li>
        <a href="#Philosophy">Philosophy</a>
          </li>
        <li>
        <a href="#Contact">Contact</a>
            </li>
      </ul>
    </nav>
      </header>
    );
    
  }
  export default Header;
