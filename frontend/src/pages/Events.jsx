import { useFetch } from '../hooks/useFetch.js';
import { GridSection } from '../components/GridSection.jsx';

export default function Events() {
  const { data, loading, error } = useFetch('/api/events', []);

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Festival</p>
          <h1>Sankranthi Events</h1>
          <p className="lead">Bonfires, decorated oxen, kites, and calm river evenings.</p>
        </div>
      </div>

      {loading && <div className="container">Loading events...</div>}
      {error && <div className="container error">{error}</div>}

      <GridSection
        id="events"
        title="Village & Town Events"
        intro="Timings to catch the best moments with family."
        items={data}
        renderItem={(event) => (
          <>
            <div className="card-image" style={{ backgroundImage: `url(${event.image})` }} />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p className="meta">
              {event.place} · {event.date}
            </p>
            <p className="fact">Fun fact: {event.fact}</p>
          </>
        )}
      />
    </div>
  );
}
