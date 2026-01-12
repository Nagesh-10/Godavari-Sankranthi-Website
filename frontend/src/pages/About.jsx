export default function About() {
  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Why This Guide</h1>
          <p className="lead">
            Simple English tips to help families, students, and travelers enjoy Sankranthi across the Godavari
            belt.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2>Our Promise</h2>
          <p className="section-intro">
            We keep details short, clear, and verified with local inputs. No heavy ads, no confusing routes,
            just easy plans.
          </p>
          <div className="pill-list">
            <span className="tag">Godavari culture</span>
            <span className="tag">Family friendly</span>
            <span className="tag">Mobile first</span>
            <span className="tag">SEO ready</span>
            <span className="tag">Low-bandwidth</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h3>What you get</h3>
            <ul className="checklist">
              <li>Festival dates with simple day plans</li>
              <li>Places, food, temples with timing tips</li>
              <li>Warm, friendly tone with short notes</li>
              <li>Clean layout that loads fast on mobile</li>
            </ul>
          </div>
          <div className="card soft">
            <h3>Contact</h3>
            <p>For updates, partnerships, or corrections:</p>
            <p>Email: hello@godavarisankranthi.com</p>
            <p>Phone: +91 99999 99999</p>
          </div>
        </div>
      </section>
    </div>
  );
}
