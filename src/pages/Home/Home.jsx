// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

import HeroImg from "../../assets/Hero.jpg";
import nvidia from "../../assets/logos/nvidia.svg";
import windows from "../../assets/logos/windows.svg";
import ibm from "../../assets/logos/ibm.svg";
import intel from "../../assets/logos/intel.svg";      // ✅ lowercase path & filename
import cloudflare from "../../assets/logos/cloudflare.svg";
import sony from "../../assets/logos/sony.svg";
import openai from "../../assets/logos/openai.svg";
import apple from "../../assets/logos/apple.svg";
import samsung from "../../assets/logos/samsung.svg";
import pi from "../../assets/logos/pi.svg";
import oracle from "../../assets/logos/oracle.svg";
import zoom from "../../assets/logos/zoom.svg";

export default function Home() {
  const logos = [
    { src: nvidia, alt: "NVIDIA" },
    { src: windows, alt: "Windows" },
    { src: ibm, alt: "IBM" },
    { src: intel, alt: "Intel" },
    { src: cloudflare, alt: "Cloudflare" },
    { src: sony, alt: "Sony" },
    { src: openai, alt: "OpenAI" },
    { src: apple, alt: "Apple" },
    { src: samsung, alt: "Samsung" },
    { src: pi, alt: "Raspberry Pi" },
    { src: oracle, alt: "Oracle" },
    { src: zoom, alt: "Zoom" },
  ];

  return (
    <div className="home">
      {/* 🟨 HERO */}
      <section className="hero">
        <img src={HeroImg} alt="NeuroRoads VR scene" className="hero-media" />
      </section>

      {/* 🌓 CURVED ARC SECTION */}
      <section className="curve">
        <svg
          className="arc-svg"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,50 A50,50 0 0 1 100,50 L100,0 L0,0 Z" fill="var(--panel)" />
        </svg>

        <div className="curve-inner">
          <Link to="/book-demo" className="btn-outline">
            Book a DEMO
          </Link>

          <h1 className="title">Neuroroads</h1>

          <ul className="logo-grid">
            {logos.map((logo, i) => (
              <li key={i} className="logo-badge">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </li>
            ))}
          </ul>

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
