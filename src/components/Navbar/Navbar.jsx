import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../../data/site";
import "./Navbar.css";

const links = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/teardowns", label: "Product Teardowns" },
  { to: "/resume", label: "Resume" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${open ? "is-open" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" aria-label={`${profile.name}, home`}>
          {profile.name}
          <span className="navbar-cursor" aria-hidden="true"></span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="navbar-toggle-bar" aria-hidden="true"></span>
          <span className="navbar-toggle-bar" aria-hidden="true"></span>
        </button>

        <nav id="main-menu" className="navbar-menu" aria-label="Main">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="navbar-link">
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary navbar-cta">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
