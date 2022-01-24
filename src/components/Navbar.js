import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="container">
      <h1><Link to="/">Math Magicians</Link></h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="line">|</li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li className="line">|</li>
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
