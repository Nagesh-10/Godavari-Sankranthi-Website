import { useMemo } from 'react';
import { Hero } from '../components/Hero.jsx';
import { GridSection } from '../components/GridSection.jsx';
import { PlanSection } from '../components/PlanSection.jsx';
import { useFetch } from '../hooks/useFetch.js';

export default function Home() {
  const { data: hero } = useFetch('/api/hero', {});
  const { data: places } = useFetch('/api/places', []);
  const { data: foods } = useFetch('/api/foods', []);
  const { data: events } = useFetch('/api/events', []);
  const { data: plan } = useFetch('/api/plan', []);

  const topPlaces = useMemo(() => places.slice(0, 3), [places]);
  const topFoods = useMemo(() => foods.slice(0, 3), [foods]);
  const topEvents = useMemo(() => events.slice(0, 3), [events]);

  return (
    <>
      <Hero
        title={hero?.title || 'Plan a bright Sankranthi in Godavari'}
        subtitle={
          hero?.subtitle ||
          'Discover riverfront sunsets, festive food, temple trails, and village events with a simple plan.'
        }
        tags={hero?.cta || ['Plan Your Visit', 'Explore Events', 'See Food Specials']}
      />

      <GridSection
        id="places"
        title="Famous Places"
        intro="River cruises, nurseries, and sunset points perfect for festive evenings."
        items={topPlaces}
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

      <GridSection
        id="food"
        title="Famous Food"
        intro="Warm sweets, tangy rice, and ghee-filled treats that define Sankranthi tables."
        items={topFoods}
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

      <GridSection
        id="events"
        title="Sankranthi Events"
        intro="Morning bonfires, decorated oxen, kite flying, and soft folk music along the river."
        items={topEvents}
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

      <PlanSection plan={plan} />
    </>
  );
}
