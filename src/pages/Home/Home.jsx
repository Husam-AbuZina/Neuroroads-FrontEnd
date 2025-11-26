// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect, useRef } from "react";
import "./Home.css";

/* ====== HERO (YouTube Embed) ====== */
const HERO_VIDEO_ID = "4tAYXNSUong";
const HERO_EMBED_URL = `https://www.youtube.com/embed/${HERO_VIDEO_ID}`;

import oxford from "../../assets/logos/OxfordUniversity.png";
import redcresent from "../../assets/logos/PalestineRedCrescent.png";
import hebronrehabilitation from "../../assets/logos/HebronRehabilitationSociety.jpg";

import LogoMarquee from "../../components/LogoMarquee/LogoMarquee";
import Counter from "../../components/Counter/Counter";
import Space from "../../components/Space/Space";

/* ====== SERVICES IMAGES ====== */
import img1 from "../../assets/slider/1ScientificResearch.png";
import img2 from "../../assets/slider/2MentalHealth.png";
import img3 from "../../assets/slider/3Analytics.png";
import img4 from "../../assets/slider/4AnywhereAnytime.png";
import img5 from "../../assets/slider/5Personalized.png";

/* SERVICE COMPONENTS */
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import ServiceBlockFlipped from "../../components/ServiceBlockFlipped/ServiceBlockFlipped";
import Pricing from "../../components/Pricing/Pricing";




export default function Home() {
  const STATS_DURATION = 1800; // 1.8s – shared
  const logos = [
    { src: oxford, alt: "Oxford University" },
    { src: redcresent, alt: "Palestine Red Crescent" },
    { src: hebronrehabilitation, alt: "Hebron Rehabilitation Society" },
  ];
  

  const slides = useMemo(() => {
    const mods = import.meta.glob(
      "../../assets/slider/*.{jpg,jpeg,png,webp}",
      { eager: true, as: "url" }
    );
    return Object.values(mods);
  }, []);

  const [i, setI] = useState(0);
  const next = () => slides.length && setI((p) => (p + 1) % slides.length);
  const prev = () => slides.length && setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  const touchX = useRef(null);
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchX.current = null;
  };

  return (
    <div className="home">
      {/* ===== HERO VIDEO (Drive embed) ===== */}
      <section className="hero">
  <div className="hero-video-wrapper">
    <iframe
      src={`${HERO_EMBED_URL}?autoplay=1&mute=1&loop=1&controls=0&playlist=${HERO_VIDEO_ID}`}
      title="Neuroroads Hero Video"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
</section>


      {/* ===== MAIN PANEL ===== */}
      <section className="panel">
        <div className="panel-inner">
          <Link to="/book-demo" className="btn-outline">
            Book a DEMO
          </Link>
          <h1 className="title">Our Partners</h1>

  {/* Logos Marquee */}
  <LogoMarquee logos={logos} />


  <div className="stats">
  <div className="stat">
    <span className="stat-label">Patients tested</span>
    <span className="stat-value">
      <Counter value={200} duration={STATS_DURATION} />
    </span>
  </div>

  <div className="stat">
    <span className="stat-label">Centers Contracted</span>
    <span className="stat-value">
      <Counter value={10} duration={STATS_DURATION} />
    </span>
  </div>

  <div className="stat">
    <span className="stat-label">Companies Accepted</span>
    <span className="stat-value">
      <Counter value={30} duration={STATS_DURATION} />
    </span>
  </div>
</div>
        </div>
      </section>


      <Space height={90} /> 
      {/* ===== SECTION TITLE ===== */}
      <section className="panel panel--narrow">
        <div className="panel-inner">
          <h2 className="title">Our Services</h2>
        </div>
      </section>

{/* === OUR SERVICES SECTION === */}
<section className="services-section">

  <ServiceBlock
    title="Scientifically Proven Therapy"
    description="NeuroRoads is backed by certified clinical research and validated through controlled studies to ensure reliability and measurable progress."
    image={img1}
  />

  <ServiceBlockFlipped
    title="Mental Health Support"
    description="Immersive VR environments designed to help reduce anxiety, improve mood, and support emotional healing."
    image={img2}
  />

  <ServiceBlock
    title="Advanced Analytics"
    description="Track patient performance with real-time metrics, progress graphs, and detailed insights powered by AI."
    image={img3}
  />

  <ServiceBlockFlipped
    title="Anywhere, Anytime Access"
    description="NeuroRoads can be used in homes, clinics, and remote therapy setups, giving patients full flexibility."
    image={img4}
  />

  <ServiceBlock
    title="Personalized Therapy Programs"
    description="Tailored VR sessions that adapt to each patient’s needs, conditions, and pace for maximum recovery impact."
    image={img5}
  />

</section>


      {/* ===== PRICING ===== */}
      <section>
      <Pricing />
      </section>
    </div>
  );
}
