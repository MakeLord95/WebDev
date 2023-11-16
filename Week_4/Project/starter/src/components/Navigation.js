// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Import the CSS file

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>{" "}
          {/* Link to the Registration component */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
