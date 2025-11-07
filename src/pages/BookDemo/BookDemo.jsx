// src/pages/BookDemo/BookDemo.jsx
import "./BookDemo.css";
export default function BookDemo(){
  return (
    <section className="wrap">
      <h1>Book a DEMO</h1>
      <p>Schedule a live VR therapy walkthrough.</p>
      <form className="demo-form" onSubmit={e=>e.preventDefault()}>
        <input placeholder="Full Name"/>
        <input type="email" placeholder="Work Email"/>
        <input type="text" placeholder="Organization"/>
        <input type="date"/>
        <button>Request Demo</button>
      </form>
    </section>
  );
}
