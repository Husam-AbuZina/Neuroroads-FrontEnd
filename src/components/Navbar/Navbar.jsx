// src/components/Navbar/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">NeuroRoads</div>
      <nav>
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/apps" className={linkClass}>Apps</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/book-demo" className="cta">Book a DEMO</NavLink>
      </nav>
    </header>
  );
}
