import { useFetch } from '../hooks/useFetch.js';
import { PlanSection } from '../components/PlanSection.jsx';

export default function Plan() {
  const { data, loading, error } = useFetch('/api/plan', []);

  return (
    <div className="page-section">
      <div className="banner">
        <div className="container">
          <p className="eyebrow">Itinerary</p>
          <h1>Date-wise Travel Plan</h1>
          <p className="lead">Four-day plan with easy mornings, temple stops, and river evenings.</p>
        </div>
      </div>

      {loading && <div className="container">Loading plan...</div>}
      {error && <div className="container error">{error}</div>}

      {!loading && !error && <PlanSection plan={data} />}
    </div>
  );
}
