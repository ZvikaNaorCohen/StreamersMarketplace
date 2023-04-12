import './Navbar.css';
import React, { useState } from 'react';
import Web3 from 'web3';

function Navbar() {
  const web3 = new Web3(window.ethereum);

  async function metamaskButtonHandler() {
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Get user account address
      const accounts = await web3.eth.getAccounts();
      alert(`Logged in with account: ${accounts[0]}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">STREAMERS MARKETPLACE</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="navbar-search-input" />
      </div>
      <ul className="navbar-links">
        <li>
          <button className="metamask-button" onClick={metamaskButtonHandler}>
            Metamask
          </button>
        </li>
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
