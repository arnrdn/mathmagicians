import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p className="fter author">
      Made by
      <Link to="https://github.com/rdnrn"> Nana</Link>
    </p>
    <p className="fter"><Link to="https://icons8.com/icon/DchOf6erOUjJ/calculator">Calculator icon by Icons8</Link></p>
  </footer>
);

export default Footer;
