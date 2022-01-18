import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="container">
      <h1>Math Magicians</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
