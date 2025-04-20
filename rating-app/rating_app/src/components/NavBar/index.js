import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClipboard, faInfoCircle, faSignOutAlt, faBarChart, faLineChart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT
    navigate('/login');               // Redirect
  };

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
            <FontAwesomeIcon icon={faBarChart} /> Ratings
          </Link>
        </li>
        <li>
          <Link to="/survey">
            <FontAwesomeIcon icon={faClipboard} /> Survey
          </Link>
        </li>
        <li>
          <Link to="/data">
            <FontAwesomeIcon icon={faLineChart} /> Data
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;