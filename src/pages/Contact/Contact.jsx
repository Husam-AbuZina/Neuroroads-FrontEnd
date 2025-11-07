// src/pages/Contact/Contact.jsx
import "./Contact.css";
export default function Contact(){
  return (
    <section className="wrap">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={e=>e.preventDefault()}>
        <input placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message" rows="5"/>
        <button>Send</button>
      </form>
    </section>
  );
}
