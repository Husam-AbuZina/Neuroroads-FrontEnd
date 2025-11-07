import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png"; // ⬅️ keep lowercase path/name

const cx = ({ isActive }) => `nr-link${isActive ? " is-active" : ""}`;

export default function Navbar() {
  return (
    <header className="nr-nav">
      <div className="nr-inner">
        <Link to="/" className="nr-brand" aria-label="NeuroRoads">
          <img className="nr-logo" src={logo} alt="" />
        </Link>

        <nav className="nr-links" aria-label="Primary">
          <NavLink end to="/" className={cx}>Home</NavLink>
          <NavLink to="/apps" className={cx}>Apps</NavLink>
          <NavLink to="/about" className={cx}>About</NavLink>
          <NavLink to="/contact" className={cx}>Contact</NavLink>
        </nav>

        <NavLink to="/book-demo" className="nr-cta">Book a DEMO</NavLink>
      </div>
    </header>
  );
}
