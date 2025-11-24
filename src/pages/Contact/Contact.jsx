import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import heroMan from "../../assets/contact/1.png";
import writeImg from "../../assets/contact/NeuroroadsLogo.svg";
import mapImg from "../../assets/contact/4.png";

// === 🔑 EMAILJS IDs - Confirmed and Used Here ===
const SERVICE_ID = "service_p9ur9tj"; 
const TEMPLATE_ID = "template_n7ndy0u"; 
const PUBLIC_KEY = "brLIx5lIG2IJLLkOz"; 
// ===============================================

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    sending: false,
    ok: null, 
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      return setStatus({
        sending: false,
        ok: false,
        message: "Please fill out all required fields.",
      });
    }

    setStatus({ sending: true, ok: null, message: "" });

    try {
      const templateParams = {
        from_name: formData.fullName,
        to_name: "Neuroroads Team", 
        user_email: formData.email,
        mobile_number: formData.mobile,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (res.status === 200) {
        setStatus({ 
          sending: false, 
          ok: true, 
          message: "Message sent successfully! We will be in touch soon." 
        });
        setFormData({ // Clear form on success
            fullName: "",
            mobile: "",
            email: "",
            subject: "",
            message: "",
        });
      } else {
        throw new Error("EmailJS failed to send the message.");
      }

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        sending: false,
        ok: false,
        message: "Something went wrong. Please check your network and try again.",
      });
    }
  };

  return (
    <section className="cpt">
      
      {/* ===== 1. HERO (First Section) ===== */}
      <div className="cpt-hero">
        <div className="cpt-hero-art">
          <div className="person-wrap">
            <img className="person" src={heroMan} alt="Consultant" />
          </div>
        </div>

        <div className="cpt-hero-copy">
          <h1>Find the Best Tech Solutions for your idea or project</h1>
          <a className="btn-gold" href="/book-demo">Contact Us</a>
        </div>
      </div>

      {/* --- REORDERED: CONTACT FORM (WRITE TO US) IS NOW SECOND --- */}
      
      {/* ===== 2. WRITE TO US (Now Second Section) ===== */}
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

        {/* The functional Form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid2">
            <div className="field">
              <label>Full Name</label>
              <input 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Full Name" 
              />
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                placeholder="+972…" 
              />
            </div>
          </div>

          <div className="grid2">
            <div className="field">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="you@company.com" 
              />
            </div>
            <div className="field">
              <label>Message Subject</label>
              <input 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Subject" 
              />
            </div>
          </div>

          <div className="field">
            <label>Message Body</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="6" 
              placeholder="Write your message…" 
            />
          </div>

          {/* Submission Status Feedback */}
          {status.message && (
            <p className={`status-message ${status.ok ? 'success' : 'error'}`}>
              {status.message}
            </p>
          )}

          <button 
            className="btn-send" 
            type="submit" 
            disabled={status.sending}
          >
            {status.sending ? 'Sending...' : '✈️ Send'}
          </button>
        </form>
      </div>
      
      {/* --- REORDERED: INFO & MAP IS NOW LAST --- */}

      {/* ===== 3. INFO & MAP (Now Last Section) ===== */}
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
              <p>+972 569683719</p>
            </div>
          </div>

          <div className="card social">
            <h4>Feel Free to contact us any time. Neuroroads Team.</h4>
            {/* Social links are currently commented out */}
          </div>
        </div>

        <div className="map">
          <img src={mapImg} alt="Map to office" />
        </div>
      </div>
    </section>
  );
}