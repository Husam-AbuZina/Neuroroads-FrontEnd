import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/neuroroadsLogo.svg";

const cx = ({ isActive }) => `nr-link${isActive ? " is-active" : ""}`;

export default function Navbar() {
  return (
    <header className="nr-nav">
      <div className="nr-inner">
        <Link to="/" className="nr-brand">
          <img src={logo} alt="NeuroRoads logo" className="nr-logo" />
        </Link>

        <nav className="nr-links">
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
