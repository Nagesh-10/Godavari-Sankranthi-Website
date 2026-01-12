export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="logo">Godavari Sankranthi</div>
          <p>Festive, cultural, and warm. Plan your trip with simple guides.</p>
        </div>
        <div className="footer-links">
          <a href="#top">Back to Top</a>
          <a href="mailto:hello@godavarisankranthi.com">Email</a>
          <a href="https://www.google.com/maps/place/Rajahmundry" target="_blank" rel="noreferrer">
            Map
          </a>
        </div>
      </div>
      <div className="footer-meta">
        © {new Date().getFullYear()} Godavari Sankranthi Guide. Built for culture lovers.
      </div>
    </footer>
  );
}
