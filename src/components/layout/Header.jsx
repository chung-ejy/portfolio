import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ejchungie
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/research">
                Research
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
