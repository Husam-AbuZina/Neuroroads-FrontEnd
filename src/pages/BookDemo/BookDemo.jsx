import { useMemo, useState } from "react";
import "./BookDemo.css";

const TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export default function BookDemo() {
  const tz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", []);
  const [pick, setPick] = useState({ date: "", time: "", mode: "Online" });
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", title: "", notes: "", agree: false,
  });
  const [state, setState] = useState({ sending: false, ok: null, err: "" });

  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const vEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const validate = () => {
    if (!pick.date) return "Select a date.";
    if (!pick.time) return "Choose a time.";
    if (!form.name.trim()) return "Enter your name.";
    if (!vEmail(form.email)) return "Use a valid email.";
    if (!form.phone.trim()) return "Add a phone number.";
    if (!form.agree) return "Please accept the privacy notice.";
    return "";
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setState({ sending: false, ok: null, err });
    try {
      setState({ sending: true, ok: null, err: "" });
      // await fetch(`${import.meta.env.VITE_API_BASE}/demo`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ pick, form, tz }) });
      await new Promise((r) => setTimeout(r, 600));
      setState({ sending: false, ok: true, err: "" });
    } catch {
      setState({ sending: false, ok: false, err: "Something went wrong. Try again." });
    }
  };

  return (
    <section className="cal">
      {/* Left: Date/Time like Calendly */}
      <aside className="cal__left">
        <header className="cal__brand">
          <div className="cal__dot" />
          <div>
            <h1>Book a DEMO</h1>
            <p>25-minute session • {tz}</p>
          </div>
        </header>

        <div className="cal__panel">
          <label className="lbl">Select a date</label>
          <input className="date" type="date" value={pick.date} onChange={(e)=>setPick(p=>({...p, date:e.target.value}))} />

          <label className="lbl row">Select a time</label>
          <div className="times">
            {TIMES.map(t => (
              <button
                key={t}
                type="button"
                className={`time ${pick.time===t ? "on" : ""}`}
                onClick={()=>setPick(p=>({...p, time:t}))}
              >{t}</button>
            ))}
          </div>

          <label className="lbl row">Mode</label>
          <div className="seg">
            {["Online","In-person"].map(m=>(
              <button
                key={m}
                type="button"
                className={`seg-btn ${pick.mode===m?"on":""}`}
                onClick={()=>setPick(p=>({...p, mode:m}))}
              >{m}</button>
            ))}
          </div>
        </div>
      </aside>

      {/* Right: Details form like Calendly */}
      <form className="cal__right" onSubmit={submit} noValidate>
        <h2>Enter details</h2>

        <div className="grid2">
          <div className="field">
            <label>Full name</label>
            <input placeholder="Husam Abuzina" value={form.name} onChange={(e)=>setF("name", e.target.value)} />
          </div>
          <div className="field">
            <label>Work email</label>
            <input type="email" placeholder="you@company.com" value={form.email} onChange={(e)=>setF("email", e.target.value)} />
          </div>
        </div>

        <div className="grid2">
          <div className="field">
            <label>Phone number</label>
            <input inputMode="tel" placeholder="+972 5X XXX XXXX" value={form.phone} onChange={(e)=>setF("phone", e.target.value)} />
          </div>
          <div className="field">
            <label>Company name</label>
            <input placeholder="Soule Tech" value={form.company} onChange={(e)=>setF("company", e.target.value)} />
          </div>
        </div>

        <div className="field">
          <label>Job title</label>
          <input placeholder="Therapist / Researcher / Manager" value={form.title} onChange={(e)=>setF("title", e.target.value)} />
        </div>

        <div className="field">
          <label>Specific questions or notes before the meeting</label>
          <textarea rows="6" placeholder="Anything we should prepare or focus on?" value={form.notes} onChange={(e)=>setF("notes", e.target.value)} />
        </div>

        <label className="check">
          <input type="checkbox" checked={form.agree} onChange={(e)=>setF("agree", e.target.checked)} />
          <span>I agree to the <a href="/privacy">Privacy Policy</a>.</span>
        </label>

        {state.err && <p className="msg err">• {state.err}</p>}
        {state.ok && <p className="msg ok">Thanks — we’ll confirm by email ✅</p>}

        <div className="actions">
          <button className="btn primary" disabled={state.sending}>
            {state.sending ? "Booking…" : "Book DEMO"}
          </button>
          <a className="btn ghost" href="/contact">Contact team</a>
        </div>

        <p className="tiny">
          By booking, you consent to being contacted regarding this demo.
        </p>
      </form>
    </section>
  );
}
