// src/components/Pricing/Pricing.jsx
import { Link } from "react-router-dom";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Start today for free.</h2>
        <p>No credit card required.</p>
      </div>

      <div className="pricing-grid">
        <FreePlan />
        <ProPlan />
        <CustomPlan />
      </div>

      <p className="pricing-footnote">
        Free viewer seats are available on all plans. Contact us for discounts
        for clinics, NGOs, and education partners.
      </p>
    </section>
  );
}

/* ---------- FREE ---------- */
function FreePlan() {
  return (
    <article className="pricing-card pricing-card--free">
      <h3 className="pricing-label">Free</h3>

      <div className="pricing-price">
        <span className="pricing-price-main">$0</span>
        <span className="pricing-price-suffix">No credit card required</span>
      </div>

      <p className="pricing-summary">
        Get started with NeuroRoads VR therapy and explore the core experience.
      </p>
      <p className="pricing-target">
        For individual therapists, students, and small teams evaluating VR
        therapy.
      </p>

      <ul className="pricing-features">
        <li>1 VR device / headset</li>
        <li>Up to 5 active patients</li>
        <li>Limited selection of VR therapy scenarios</li>
        <li>Basic session tracking</li>
        <li>Single clinician account</li>
        <li>Community &amp; email support</li>
      </ul>

      <Link to="/book-demo" className="pricing-cta">
  Start for free
</Link>

    </article>
  );
}

/* ---------- PRO ---------- */
function ProPlan() {
  return (
    <article className="pricing-card pricing-card--pro">
      <div className="pricing-card-top">
        <h3 className="pricing-label">Pro</h3>
        <span className="pricing-badge">Popular</span>
      </div>

      <div className="pricing-price">
        <span className="pricing-price-main">$99</span>
        <span className="pricing-price-suffix">per center / month</span>
      </div>

      <p className="pricing-summary">
        For clinics and rehab centers running VR therapy in daily practice.
      </p>
      <p className="pricing-target">
        For clinics, rehabilitation centers, and professional therapists.
      </p>

      <ul className="pricing-features">
        <li>Up to 3 VR devices / headsets</li>
        <li>Up to 50 active patients</li>
        <li>Full library of VR therapy scenarios</li>
        <li>Advanced analytics &amp; progress reports</li>
        <li>Up to 10 clinician accounts</li>
        <li>Custom session templates &amp; notes</li>
        <li>Priority support (email &amp; chat)</li>
        <li>Secure cloud data backup</li>
      </ul>

      <Link to="/book-demo" className="pricing-cta pricing-cta--primary">
  Get started
</Link>

    </article>
  );
}

/* ---------- CUSTOM ---------- */
function CustomPlan() {
  return (
    <article className="pricing-card pricing-card--custom">
      <h3 className="pricing-label">Custom</h3>

      <div className="pricing-price">
        <span className="pricing-price-main">Let&apos;s talk</span>
        <span className="pricing-price-suffix">Custom pricing</span>
      </div>

      <p className="pricing-summary">
        For hospitals, NGOs, and research partners with advanced requirements.
      </p>
      <p className="pricing-target">
        For hospitals, large organizations, universities, and NGOs.
      </p>

      <ul className="pricing-features">
        <li>Unlimited centers &amp; VR devices</li>
        <li>Unlimited clinicians &amp; patients</li>
        <li>Custom VR therapy scenarios &amp; protocols</li>
        <li>On-premise or private cloud deployment</li>
        <li>Integration with EMR/EHR systems</li>
        <li>Dedicated onboarding &amp; training</li>
        <li>24/7 priority support</li>
        <li>Joint research &amp; publication support</li>
      </ul>

      <Link to="/book-demo" className="pricing-cta">
  Contact us
</Link>

    </article>
  );
}
