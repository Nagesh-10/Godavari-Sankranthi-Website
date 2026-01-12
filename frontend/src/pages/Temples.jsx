import { useFetch } from '../hooks/useFetch.js';
import { GridSection } from '../components/GridSection.jsx';

export default function Temples() {
  const { data, loading, error } = useFetch('/api/temples', []);

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Spiritual</p>
          <h1>Temples to Visit</h1>
          <p className="lead">Quiet darshan, lamps, and cultural stories across the Godavari belt.</p>
        </div>
      </div>

      {loading && <div className="container">Loading temples...</div>}
      {error && <div className="container error">{error}</div>}

      <GridSection
        title="Temple List"
        intro="Morning and evening darshan timings for a calm visit."
        items={data}
        renderItem={(temple) => (
          <>
            <div className="card-image" style={{ backgroundImage: `url(${temple.image})` }} />
            <h3>{temple.name}</h3>
            <p>{temple.special}</p>
            <p className="meta">
              {temple.location} · Best time: {temple.bestTime}
            </p>
            <p className="fact">Fun fact: {temple.fact}</p>
          </>
        )}
      />
    </div>
  );
}
