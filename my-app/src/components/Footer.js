import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="subscribe">
        <h4>Subscribe</h4>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
      <div className="links">
        <div className="section">
          <h4>Section 1</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="section">
          <h4>Section 2</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="section">
          <h4>Section 3</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="section">
          <h4>Section 4</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="section">
          <h4>Section 5</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
