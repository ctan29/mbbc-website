import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navElem = useRef();

  let animated = false;

  // Apply navbar animation when user scrolls down
  useEffect(() => {
    window.onscroll = () => {
      // 20px buffer because animation returns scrollY to 0 (1em shorter)
      if (window.scrollY >= 20 && animated === false) {
        navElem.current.style.animation = "atTop 0.3s forwards";
        animated = true;
        console.log("animated");
      } else if (window.scrollY === 0 && animated === true) {
        navElem.current.style.animation = "notAtTop 0.2s";
        animated = false;
        console.log("unanimated");
      }
    };
  }, []);

  return (
    <nav ref={navElem}>
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            <img src="/MbbcLogoNew.png" alt="test" height="48" />
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
        <li>
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
