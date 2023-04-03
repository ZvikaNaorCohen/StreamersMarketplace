import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">STREAMERS MARKETPLACE</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="navbar-search-input" />
    </div>
      <ul className="navbar-links">
        <li><button className="navbar-button">Home</button></li>
        <li><button className="navbar-button">About</button></li>
        <li><button className="navbar-button">Explore</button></li>
        <li><button className="navbar-button">Contact Us</button></li>
        <li><button className="navbar-button">Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
