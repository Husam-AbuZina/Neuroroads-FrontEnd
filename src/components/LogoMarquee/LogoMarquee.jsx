import "./LogoMarquee.css";

export default function LogoMarquee({ logos }) {
  // Duplicate the logos enough times to always overflow screen width
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="logo-marquee">
      <div className="logo-track">
        {repeated.map((l, idx) => (
          <div key={idx} className="logo-item">
            <img src={l.src} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
