import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // You'll add CSS styles for Navbar here

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>HealthCare Hospital</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
