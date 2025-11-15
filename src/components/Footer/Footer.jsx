import "./Footer.css";
import apple from "../../assets/logos/apple.svg"; // replace with your mark if you want

import logo from "../../assets/neuroroadsLogo.svg";

export default function Footer() {
  return (
    <footer className="nr-footer" role="contentinfo">
      <div className="nr-foot__grid">
        <nav aria-label="Footer: primary">
          <ul className="nr-list">
            <li><a href="/">Home</a></li>
            <li><a href="/apps">Product</a></li>
            <li><a href="/research">Research & Validation</a></li>
            <li><a href="/professionals">For Professionals</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <nav aria-label="Footer: legal">
          <ul className="nr-list">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </nav>

        <address className="nr-contact" aria-label="Contact Information">
          <h4>Contact Information</h4>
          <a href="mailto:husamzinap@gmail.com">husamzinap@gmail.com</a>
          {/* <a href="https://www.neuroroads.com" target="_blank" rel="noreferrer">www.neuroroads.com</a> */}
          <div>Hebron – Palestine</div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram Link</a>
        </address>

        <div className="nr-mark" aria-hidden="true">
          <span className="nr-mark__circle">
            <img src={logo} alt="" />
          </span>
        </div>
      </div>

      <div className="nr-foot__bottom">
        <small>™ 2025 NeuroRoads VR Therapy – All Rights Reserved</small>
      </div>
    </footer>
  );
}
