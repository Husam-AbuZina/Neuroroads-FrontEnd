import "./ServiceBlock.css";

export default function ServiceBlock({ title, description, image }) {
  return (
    <section className="service-block">
      <div className="service-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </section>
  );
}
