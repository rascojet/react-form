import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="inline-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}

export default Navigation;