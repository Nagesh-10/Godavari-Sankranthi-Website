import { useFetch } from '../hooks/useFetch.js';
import { GridSection } from '../components/GridSection.jsx';

export default function Places() {
  const { data, loading, error } = useFetch('/api/places', []);

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Explore</p>
          <h1>Famous Places in Godavari</h1>
          <p className="lead">River views, gardens, and quiet village escapes for Sankranthi.</p>
        </div>
      </div>

      {loading && <div className="container">Loading places...</div>}
      {error && <div className="container error">{error}</div>}

      <GridSection
        title="Top Picks"
        intro="Shortlist for sunsets, photo spots, and family evening plans."
        items={data}
        renderItem={(place) => (
          <>
            <div className="card-image" style={{ backgroundImage: `url(${place.image})` }} />
            <h3>{place.name}</h3>
            <p>{place.special}</p>
            <p className="meta">
              {place.location} · Best time: {place.bestTime}
            </p>
            <p className="fact">Fun fact: {place.fact}</p>
          </>
        )}
      />
    </div>
  );
}
