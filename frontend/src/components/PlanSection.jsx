export function PlanSection({ plan }) {
  return (
    <section className="section" id="plan">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Date-wise Plan</p>
            <h2>Easy Sankranthi Schedule</h2>
            <p className="section-intro">
              Follow this simple route to enjoy Bhogi, Sankranthi, and Kanuma without rush.
            </p>
          </div>
        </div>
        <div className="plan-grid">
          {plan.map((day) => (
            <div key={day.day} className="plan-card">
              <p className="eyebrow">{day.day}</p>
              <h3>{day.title}</h3>
              <ul>
                {day.plan.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
