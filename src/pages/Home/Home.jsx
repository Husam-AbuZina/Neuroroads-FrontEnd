import { Link } from "react-router-dom";
import { useMemo, useState, useEffect, useRef } from "react";
import "./Home.css";

/* ====== ASSETS (from src/assets/) ====== */
import HeroImg from "../../assets/Hero.jpg";

import nvidia from "../../assets/logos/nvidia.svg";
import windows from "../../assets/logos/windows.svg";
import ibm from "../../assets/logos/ibm.svg";
import intel from "../../assets/logos/intel.svg";
import cloudflare from "../../assets/logos/cloudflare.svg";
import sony from "../../assets/logos/sony.svg";
import openai from "../../assets/logos/openai.svg";
import apple from "../../assets/logos/apple.svg";
import samsung from "../../assets/logos/samsung.svg";
import pi from "../../assets/logos/pi.svg";
import oracle from "../../assets/logos/oracle.svg";
import zoom from "../../assets/logos/zoom.svg";

export default function Home() {
  /* ====== LOGOS ====== */
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

  /* ====== SLIDER (auto-load all /src/assets/slider/*) ====== */
  const slides = useMemo(() => {
    const mods = import.meta.glob("../../assets/slider/*.{jpg,jpeg,png,webp}", {
      eager: true,
      as: "url",
    });
    return Object.values(mods);
  }, []);

  const [i, setI] = useState(0);
  const next = () => slides.length && setI((p) => (p + 1) % slides.length);
  const prev = () => slides.length && setI((p) => (p - 1 + slides.length) % slides.length);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  // touch swipe
  const touchX = useRef(null);
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <div className="home">
      {/* ===== HERO IMAGE ===== */}
      <section className="hero">
        <img src={HeroImg} alt="NeuroRoads VR scene" className="hero-media" />
      </section>

      {/* ===== CURVED PANEL ===== */}
      <section className="curve">
        <svg className="arc-svg" viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,50 A50,50 0 0 1 100,50 L100,0 L0,0 Z" fill="var(--panel)" />
        </svg>

        <div className="curve-inner">
          <Link to="/book-demo" className="btn-outline">Book a DEMO</Link>
          <h1 className="title">Neuroroads</h1>

          {/* Logos */}
          <ul className="logo-grid">
            {logos.map((l, idx) => (
              <li key={idx} className="logo-badge">
                <img src={l.src} alt={l.alt} loading="lazy" />
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

      {/* ===== IMAGE SLIDER ===== */}
      <section className="gallery">
        <button className="arrow left" aria-label="Previous" onClick={prev}>←</button>

        <div className="frame" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {slides.length ? (
            <img key={slides[i]} src={slides[i]} alt={`Slide ${i + 1}`} className="slide" />
          ) : (
            <div className="slide placeholder">Add images to <code>src/assets/slider</code></div>
          )}
        </div>

        <button className="arrow right" aria-label="Next" onClick={next}>→</button>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing">
        {[1, 2, 3].map((k) => (
          <article key={k} className="card">
            <div className="ribbon">80% OFF</div>
            <h3 className="plan">Premium</h3>
            <p className="sub">Everything you need to get started</p>

            <div className="price">
              <span className="was">US$ 12.19</span>
              <div className="nowwrap">
                <span className="now">US$ 2.49</span>
                <span className="per">/mo</span>
              </div>
              <span className="bonus">+3 Months Free</span>
            </div>

            <button className="deal">Limited time deal</button>
            <button className="choose">Choose Plan</button>

            <p className="tiny">
              Get 48 months for US$ 119.52 (regular price US$ 595.12).<br />
              Renews at US$ 10.99/mo.
            </p>

            <ul className="features">
              <li>✓ Feature one short note.</li>
              <li>✓ Another concise benefit.</li>
              <li>✓ Works on all devices.</li>
              <li>✓ Priority email support.</li>
            </ul>

            <h4 className="benefits">Premium benefits</h4>
            <ul className="checks">
              <li>✔ Access to all scenarios</li>
              <li>✔ Progress tracking</li>
              <li>✔ Admin dashboard</li>
              <li>✔ Updates included</li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
