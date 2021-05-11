import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" className="navbar-link">
          <img src="/MbbcLogoNew.png" alt="test" height="55" />
        </Link>
      </li>
      <li>
        <Link to="/" className="navbar-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="navbar-link">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
