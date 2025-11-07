// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/hero.jpg";

// Put your real logos here (SVG/PNG). If missing, a text fallback renders.
const logos = [
  { src: "/assets/logos/nvidia.svg", alt: "NVIDIA", text: "NVIDIA" },
  { src: "/assets/logos/windows.svg", alt: "Microsoft", text: "Windows" },
  { src: "/assets/logos/ibm.svg", alt: "IBM", text: "IBM" },
  { src: "/assets/logos/intel.svg", alt: "Intel", text: "Intel" },
  { src: "/assets/logos/cloudflare.svg", alt: "Cloudflare", text: "Cloudflare" },
  { src: "/assets/logos/sony.svg", alt: "Sony", text: "Sony" },
  { src: "/assets/logos/openai.svg", alt: "OpenAI", text: "OpenAI" },
  { src: "/assets/logos/apple.svg", alt: "Apple", text: "Apple" },
  { src: "/assets/logos/samsung.svg", alt: "Samsung", text: "Samsung" },
  { src: "/assets/logos/pi.svg", alt: "Raspberry Pi", text: "Pi" },
  { src: "/assets/logos/oracle.svg", alt: "Oracle", text: "Oracle" },
  { src: "/assets/logos/zoom.svg", alt: "Zoom", text: "Zoom" },
];

export default function Home() {
  return (
    <div className="home">
      {/* Top media banner */}
      <div className="hero">
        <img src={heroImg} alt="NeuroRoads VR scene" className="hero-media" />
      </div>

      {/* Curved headline block */}
      <section className="curve">
        <div className="curve-inner">
          <Link to="/book-demo" className="btn-outline">Book a DEMO</Link>
          <h1 className="title">Neuroroads</h1>

          {/* Partner logos */}
          <ul className="logo-grid" aria-label="Technology & partner logos">
            {logos.map((l, i) => (
              <li key={i} className="logo-badge">
                {l.src ? (
                  // When you add real files, Vite will serve /assets/... from public/ or import them.
                  <img src={l.src} alt={l.alt} loading="lazy" />
                ) : (
                  <span aria-hidden="true">{l.text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <span className="stat-label">Patients tested</span>
              <span className="stat-value">+200</span>
            </div>
            <div className="stat">
              <span className="stat-label">Centers Contracted</span>
              <span className="stat-value">+10</span>
            </div>
            <div className="stat">
              <span className="stat-label">Companies Accepted</span>
              <span className="stat-value">+30</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
