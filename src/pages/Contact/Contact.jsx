import "./Contact.css";
import heroMan from "../../assets/contact/1.png";
import heroShape from "../../assets/contact/2.png";
import writeImg from "../../assets/contact/3.png";
import mapImg from "../../assets/contact/4.png";

export default function Contact() {
  return (
    <section className="cpt">
      {/* ===== HERO ===== */}
      <div className="cpt-hero">
        <div className="cpt-hero-art">
          {/* <div className="shape-wrap">
            <img className="shape" src={heroShape} alt="Decorative shape" />
          </div> */}
          <div className="person-wrap">
            <img className="person" src={heroMan} alt="Consultant" />
          </div>
        </div>

        <div className="cpt-hero-copy">
          <h1>Find the Best Tech Solutions for your idea or project</h1>
          <a className="btn-gold" href="/book-demo">Contact Us</a>
        </div>
      </div>

      {/* ===== INFO & MAP ===== */}
      <h2 className="cpt-title">Contact Us</h2>
      <div className="cpt-info-map">
        <div className="info-cards">
          <div className="card">
            <div className="dot">🏢</div>
            <div>
              <h4>Company Address</h4>
              <p>Palestine – Hebron – Al-A’dl Street – Al-Maha Building – 3rd Floor</p>
            </div>
          </div>

          <div className="card">
            <div className="dot">🕒</div>
            <div>
              <h4>Working Hours</h4>
              <p>Sunday – Thursday · 08:00 – 16:00</p>
            </div>
          </div>

          <div className="card">
            <div className="dot">📞</div>
            <div>
              <h4>Contact Numbers</h4>
              <p>+972 595112795</p>
            </div>
          </div>

          <div className="card social">
            <h4>Social Media</h4>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
              <a href="https://x.com" target="_blank" rel="noreferrer">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">in</a>
            </div>
          </div>
        </div>

        <div className="map">
          <img src={mapImg} alt="Map to office" />
        </div>
      </div>

      {/* ===== WRITE TO US ===== */}
      <div className="cpt-write">
        <div className="write-left">
          <h3>Write to Us</h3>
          <p>
            Get in touch to find the best solution for your challenge, get support for your project, or request expert consultation.
          </p>
          <div className="illus-wrap">
            <img src={writeImg} alt="Contact illustration" />
          </div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="grid2">
            <div className="field">
              <label>Full Name</label>
              <input placeholder="Full Name" />
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input placeholder="+972…" />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label>Message Subject</label>
              <input placeholder="Subject" />
            </div>
          </div>

          <div className="field">
            <label>Message Body</label>
            <textarea rows="6" placeholder="Write your message…" />
          </div>

          <button className="btn-send" type="submit">✈️ Send</button>
        </form>
      </div>
    </section>
  );
}
