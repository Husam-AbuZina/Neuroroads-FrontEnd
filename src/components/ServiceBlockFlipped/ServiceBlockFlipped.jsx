import "./ServiceBlockFlipped.css";

export default function ServiceBlockFlipped({ title, description, image }) {
  return (
    <section className="service-block-flipped">
      <div className="service-image-flipped">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-text-flipped">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
