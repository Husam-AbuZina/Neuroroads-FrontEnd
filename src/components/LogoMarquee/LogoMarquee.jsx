import "./LogoMarquee.css";

export default function LogoMarquee({ logos }) {
  return (
    <div className="logo-marquee">
      <div className="logo-track">
        {logos.concat(logos).map((l, idx) => (
          <div key={idx} className="logo-item">
            <img src={l.src} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
