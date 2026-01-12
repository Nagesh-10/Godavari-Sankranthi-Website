export function Hero({ title, subtitle, tags = [] }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow">Godavari Sankranthi Guide</p>
          <h1>{title}</h1>
          <p className="lead">{subtitle}</p>
          <div className="hero-actions">
            <a className="cta" href="#plan">
              Plan Your Visit
            </a>
            <a className="ghost" href="#events">
              Explore Events
            </a>
          </div>
          <div className="tag-row">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-card">
          <p>Warm villages, festive food, river breeze.</p>
          <p>Simple routes and date-wise plans to make Sankranthi easy.</p>
        </div>
      </div>
    </section>
  );
}
