import { useFetch } from '../hooks/useFetch.js';
import { GridSection } from '../components/GridSection.jsx';

export default function Food() {
  const { data, loading, error } = useFetch('/api/foods', []);

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Taste</p>
          <h1>Famous Sankranthi Food</h1>
          <p className="lead">Warm sweets, ghee flavors, and tangy rice bowls for family tables.</p>
        </div>
      </div>

      {loading && <div className="container">Loading food...</div>}
      {error && <div className="container error">{error}</div>}

      <GridSection
        title="Must Try"
        intro="Quick list to try across homes, street stalls, and festive lunches."
        items={data}
        renderItem={(food) => (
          <>
            <div className="card-image" style={{ backgroundImage: `url(${food.image})` }} />
            <h3>{food.name}</h3>
            <p>{food.special}</p>
            <p className="meta">
              {food.location} · Best time: {food.bestTime}
            </p>
            <p className="fact">Fun fact: {food.fact}</p>
          </>
        )}
      />
    </div>
  );
}
