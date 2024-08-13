// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/dashboard">Home</Link>
      <Link to="/event-details">Events</Link>
      <Link to="/create-task">Tasks</Link>
      <Link to="/create-event">Create Event</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Navbar;
