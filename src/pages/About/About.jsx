// src/pages/About/About.jsx
import "./About.css";
import vision from "../../assets/about/vision.png";
import mission from "../../assets/about/mission.png";
import t1 from "../../assets/about/husam.png";
import t2 from "../../assets/about/musa.jpeg";
import t3 from "../../assets/about/ahmad.jpeg";
import t4 from "../../assets/about/amjad.jpeg";

export default function About(){
  const team=[{img:t1,name:"Eng. Husam Abuzina",role:"Founder - Software Engineer"},
              {img:t2,name:"Dr. Musa Alrefayah",role:"Co-Founder Networking Expert"},
              {img:t3,name:"Eng. Ahmad Sultan",role:"Founder - Game Developer"},
              {img:t4,name:"Des. Amjad Khamayseh",role:"Co-Founder - Graphic Designer"}];
  return(
    <section className="about">
      <div className="wrap">
        <div className="row alt">
          <div>
            <h2 className="h2">Vision</h2>
            <p className="bubble">
              Make evidence-based VR therapy mainstream: measurable, repeatable, and motivating across rehabilitation centers worldwide.
            </p>
          </div>
          <div className="iconWrap"><img src={vision} alt="Vision illustration" /></div>
        </div>

        <div className="row">
          <div className="iconWrap"><img src={mission} alt="Mission illustration" /></div>
          <div>
            <h2 className="h2">Mission</h2>
            <p className="bubble">
              Build realistic VR tasks that track outcomes and turn them into clinical insight—so therapists can personalize plans with confidence.
            </p>
          </div>
        </div>

        <div className="story">
          <h2 className="h2">Our Story</h2>
          <div className="storyGrid">
            <article className="storyCard">
              <h3>How the Idea Started</h3>
              <p>Born in clinics, refined with patients. We turned daily challenges—crossing streets, buses, errands—into safe VR scenarios.</p>
            </article>
            <article className="storyCard">
              <h3>Partnership</h3>
              <p>We co-develop protocols with therapists and research partners to ensure validity, safety, and adoption.</p>
            </article>
            <article className="storyCard">
              <h3>Recognition</h3>
              <p>Early clinical results and conference showcases accelerated trust and real-world deployments.</p>
            </article>
          </div>
        </div>

        <div className="team">
          <h2 className="h2">Our Team</h2>
          <div className="teamGrid">
            {team.map((m)=>(
              <article key={m.name} className="member" tabIndex="0">
                <div className="avatar"><img src={m.img} alt={m.name} /></div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
