export function GridSection({ id, title, intro, items = [], renderItem }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>{title}</h2>
            <p className="section-intro">{intro}</p>
          </div>
        </div>
        <div className="grid">
          {items.map((item) => (
            <div key={item.id || item.name} className="card">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
