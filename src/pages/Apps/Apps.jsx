import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Apps.css";

// App brand assets (replace with your real ones)
import appIcon from "../../assets/apps/neuroroads/icon.png";      // 512x512 png
import heroPoster from "../../assets/apps/neuroroads/hero.jpg";   // 1600x900

export default function Apps() {
  // Auto-load screenshots from /src/assets/apps/neuroroads/shots/
  const shots = useMemo(() => {
    const mods = import.meta.glob("../../assets/apps/neuroroads/shots/*.{jpg,jpeg,png,webp}", { eager: true, as: "url" });
    return Object.values(mods);
  }, []);
  const [i, setI] = useState(0);
  const next = () => shots.length && setI((p) => (p + 1) % shots.length);
  const prev = () => shots.length && setI((p) => (p - 1 + shots.length) % shots.length);

  return (
    <section className="apps">
      {/* HERO */}
      <div className="apps-hero">
        <img className="apps-hero__poster" src={heroPoster} alt="NeuroRoads VR poster" />
        <div className="apps-hero__copy">
          <img className="apps-icon" src={appIcon} alt="NeuroRoads icon" />
          <h1>NeuroRoads</h1>
          <p>Evidence-based VR therapy—real-world tasks, measurable outcomes, clinician control.</p>
          <div className="apps-actions">
            <Link to="/book-demo" className="btn-primary">Book a DEMO</Link>
            <a href="/research" className="btn-ghost">Research & Validation</a>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="wrap">
        <div className="cards-3">
          <article className="chip">
            <h3>Real-life Scenarios</h3>
            <p>Street crossing, transport, daily-living tasks—safe, repeatable, configurable.</p>
          </article>
          <article className="chip">
            <h3>Clinical Metrics</h3>
            <p>Time, accuracy, assistance, repetitions and trends exported to your EMR.</p>
          </article>
          <article className="chip">
            <h3>Admin Dashboard</h3>
            <p>Create programs, track progress, share reports with families and payers.</p>
          </article>
        </div>

        {/* SCREENSHOTS */}
        <div className="shots">
          <button className="arrow left" onClick={prev} aria-label="Previous">←</button>
          <div className="shots-frame">
            {shots.length ? (
              <img key={shots[i]} src={shots[i]} alt={`NeuroRoads screenshot ${i + 1}`} />
            ) : (
              <div className="shots-empty">Add images to <code>/src/assets/apps/neuroroads/shots</code></div>
            )}
          </div>
          <button className="arrow right" onClick={next} aria-label="Next">→</button>
        </div>

        {/* FEATURE LIST */}
        <div className="feature-grid">
          {[
            ["Therapy Programs", "Preset & custom difficulty, progression rules."],
            ["Objective Reports", "PDF/CSV export with session notes."],
            ["Multi-Profile", "Patient accounts with history & baselines."],
            ["Offline First", "Runs locally; syncs when online."],
            ["Safety First", "Comfort modes, teleport, seated options."],
            ["XR Ready", "OpenXR, Quest, PCVR, and future Vision Pro."],
          ].map(([t, d]) => (
            <div className="feature" key={t}>
              <div className="dot" aria-hidden>●</div>
              <div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="cta-strip">
          <div>
            <h3>Ready to try NeuroRoads?</h3>
            <p>Schedule a personalized demo for your clinic or lab.</p>
          </div>
          <Link to="/book-demo" className="btn-primary big">Book a DEMO</Link>
        </div>
      </div>
    </section>
  );
}
