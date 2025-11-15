// src/pages/BookDemo/BookDemo.jsx
import { useState } from "react";
import "./BookDemo.css";

const COUNTRIES = [
  "Palestine",
  "Jordan",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Other",
];

export default function BookDemo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    agree: false,
  });

  const [state, setState] = useState({ sending: false, ok: null, err: "" });

  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const vEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const validate = () => {
    if (!form.firstName.trim()) return "Please enter your first name.";
    if (!form.lastName.trim()) return "Please enter your last name.";
    if (!vEmail(form.email)) return "Please use a valid work email.";
    if (!form.phone.trim()) return "Please add a phone number.";
    if (!form.company.trim()) return "Please add your company.";
    if (!form.country) return "Please select your country.";
    if (!form.agree) return "Please agree to be contacted about the demo.";
    return "";
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setState({ sending: false, ok: null, err });

    try {
      setState({ sending: true, ok: null, err: "" });
      // await fetch(`${import.meta.env.VITE_API_BASE}/demo`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 700));
      setState({ sending: false, ok: true, err: "" });
    } catch {
      setState({
        sending: false,
        ok: false,
        err: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="demo">
      <div className="demo-inner">
        {/* LEFT COPY */}
        <div className="demo-left">
          <p className="demo-kicker">NeuroRoads VR Therapy</p>
          <h1 className="demo-title">
            See NeuroRoads in action with a live demo.
          </h1>
          <p className="demo-sub">
            Discover how immersive VR therapy can help your patients improve
            balance, cognitive skills, and confidence in a safe, controlled
            environment.
          </p>

          <h3 className="demo-what">What to expect from a demo:</h3>
          <ul className="demo-list">
            <li>
              We’ll align on your goals, patient profiles, and use cases (clinic
              or research).
            </li>
            <li>
              Live walkthrough of NeuroRoads: levels, analytics dashboard, and
              therapist tools.
            </li>
            <li>
              We’ll discuss hardware setup, onboarding, and how to start with
              your first patients.
            </li>
            <li>
              Q&amp;A on pricing, implementation, and next steps for your
              center.
            </li>
          </ul>
        </div>

        {/* RIGHT FORM CARD */}
        <form className="demo-card" onSubmit={submit} noValidate>
          <h2 className="demo-card-title">Book your demo 👇</h2>

          <div className="demo-grid2">
            <div className="field">
              <label>First name</label>
              <input
                placeholder="Jhon"
                value={form.firstName}
                onChange={(e) => setF("firstName", e.target.value)}
              />
            </div>
            <div className="field">
              <label>Last name</label>
              <input
                placeholder="Benky"
                value={form.lastName}
                onChange={(e) => setF("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label>Work email</label>
            <input
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setF("email", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              inputMode="tel"
              placeholder="+972 5X XXX XXXX"
              value={form.phone}
              onChange={(e) => setF("phone", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Company</label>
            <input
              placeholder="Parent / Clinic / Center"
              value={form.company}
              onChange={(e) => setF("company", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Job title</label>
            <input
              placeholder="Therapist / Rehab specialist / Researcher"
              value={form.jobTitle}
              onChange={(e) => setF("jobTitle", e.target.value)}
            />
          </div>

          <div className="field">
            <label>Country</label>
            <select
              value={form.country}
              onChange={(e) => setF("country", e.target.value)}
            >
              <option value="">Select country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <label className="demo-check">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setF("agree", e.target.checked)}
            />
            <span>
              Yes, I’d like to receive emails about NeuroRoads updates and
              demos. I can unsubscribe at any time.
            </span>
          </label>

          {state.err && <p className="demo-msg demo-msg--err">• {state.err}</p>}
          {state.ok && (
            <p className="demo-msg demo-msg--ok">
              Thank you — we’ll get back to you shortly ✅
            </p>
          )}

          <button className="demo-btn" disabled={state.sending}>
            {state.sending ? "Sending…" : "Request demo"}
          </button>

          <p className="demo-legal">
            By submitting this form, you agree that NeuroRoads may contact you
            about this demo and related services.
          </p>
        </form>
      </div>
    </section>
  );
}
