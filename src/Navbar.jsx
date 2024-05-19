import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Главная</Link></li>
        <li><Link to="/perek" className="nav-link">Перекресток</Link></li>
        <li><Link to="/globus" className="nav-link">Глобус</Link></li>
        <li><Link to="/metro" className="nav-link">Метро</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
