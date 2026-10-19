import { Link } from "react-router-dom";
import { profile } from "../../data/site";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-pitch">
            Building something and need a product manager who can talk to engineers?
          </p>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className="footer-bottom">
          <nav className="footer-links" aria-label="Footer">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/teardowns">Product Teardowns</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </nav>
          <p className="footer-meta">
            © {year} {profile.name}. Based in {profile.location}, working remotely.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
