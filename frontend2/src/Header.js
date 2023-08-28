import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Your header content goes here */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          
          <Link to="/SignOut" className="dropdown-item">
                  <button className="btn btn-outline-primary">Logout</button>
                </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
