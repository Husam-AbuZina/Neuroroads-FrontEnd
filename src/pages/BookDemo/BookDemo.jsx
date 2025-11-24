// src/pages/BookDemo/BookDemo.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./BookDemo.css";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
  "Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad",
  "Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the",
  "Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
  "Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India",
  "Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
  "Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
  "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia",
  "Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
  "New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine",
  "Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia",
  "Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
  "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
  "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe"
];


export default function BookDemo() {
  const formRef = useRef();

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

  // const submit = async (e) => {
  //   e.preventDefault();
  //   const err = validate();
  //   if (err) return setState({ sending: false, ok: null, err });

  //   try {
  //     setState({ sending: true, ok: null, err: "" });

  //     // EmailJS send
  //     await emailjs.sendForm(
  //       "service_p9ur9tj",     // Replace with your service ID
  //       "template_n7ndy0u",    // Replace with your template ID
  //       formRef.current,
  //       { publicKey: "brLIx5lIG2IJLLkOz" } // Replace with your public key
  //     );

  //     setState({ sending: false, ok: true, err: "" });
  //     setForm({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       jobTitle: "",
  //       country: "",
  //       agree: false,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     setState({
  //       sending: false,
  //       ok: false,
  //       err: "Something went wrong. Please try again.",
  //     });
  //   }
  // };

  const submit = async (e) => {
    e.preventDefault();
  
    const err = validate();
    if (err) return setState({ sending: false, ok: null, err });
  
    try {
      setState({ sending: true, ok: null, err: "" });
  
      // --- 🔑 THE KEY FIX: CAPTURE THE RESPONSE IN THE 'res' VARIABLE ---
      const res = await emailjs.send(
        "service_p9ur9tj",
        "template_n7ndy0u",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          jobTitle: form.jobTitle,
          country: form.country,
          agree: form.agree ? "Yes" : "No",
        },
        "brLIx5lIG2IJLLkOz"
      );
      // -----------------------------------------------------------------
  
      if (res.status === 200) {
        // Success: The email was sent
        setState({ sending: false, ok: true, err: "" });
      } else {
        // Failure: emailjs rejected the request (though often it throws an error before this)
        throw new Error("Failed");
      }
    } catch (e) {
      // Catches both network errors AND the 'throw new Error("Failed")' above
      console.error(e); // Log the actual error for better debugging
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
        <form ref={formRef} className="demo-card" onSubmit={submit} noValidate>
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
