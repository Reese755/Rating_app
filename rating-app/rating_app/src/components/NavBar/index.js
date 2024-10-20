import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faHome, faUser, faClipboard, faInfoCircle, faSignOutAlt, faBarChart } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

function Navbar () {
  
  return (
    <nav className="navbar">

    <h1 className="navbar-header">Honesty</h1>
    <ul className="navbar-list">
      <li>
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} /> Profile
        </Link>
      </li>
      <li>
        <Link to="/rating">
          <FontAwesomeIcon icon={faBarChart} /> Rating
        </Link>
      </li>
      <li>
        <Link to="/survey">
          <FontAwesomeIcon icon={faClipboard} /> Survey
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
      </li>
      <li>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;