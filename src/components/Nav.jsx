import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkClass = ({ isActive }) => (isActive ? "active-link link" : "link");

  return (
    <>
      <nav>
        <NavLink to="/" className="link logo-link" id="logo-link">
          <div className="logo">
            <FaMusic className="logo-icon" />
            <div className="logo-text">SSC MUSIC</div>
          </div>
        </NavLink>
        <div
          className={`${
            mobileMenuOpen ? "hamburger-nav open" : "hamburger-nav"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="hamburger-line line-1"></div>
          <div className="hamburger-line line-2"></div>
          <div className="hamburger-line line-3"></div>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "links-container open" : "links-container"
          }`}
        >
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/samples" className={linkClass}>
            Music
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "contact link active-link" : "contact link"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
