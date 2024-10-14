import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

function Navbar () {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* <li><Link to="/ratings">Ratings</Link></li> */}
        <li><Link to="/survey">Survey</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;