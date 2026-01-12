import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error();
      setStatus('Thanks! We received your message.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Unable to send now. Please try again.');
    }
  }

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Reach the Team</h1>
          <p className="lead">Share feedback, travel questions, or festival updates.</p>
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <form className="card form-card" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need"
              />
            </label>
            <button type="submit" className="cta">
              Send
            </button>
            {status && <p className="status">{status}</p>}
          </form>

          <div className="card soft">
            <h3>Quick Info</h3>
            <p>Email: hello@godavarisankranthi.com</p>
            <p>Phone: +91 99999 99999</p>
            <p>Social: Instagram / YouTube (coming soon)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
