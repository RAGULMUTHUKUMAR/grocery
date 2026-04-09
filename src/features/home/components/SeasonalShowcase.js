function SeasonalShowcase() {
  return (
    <section className="section shell showcase-section">
      <div className="showcase-panel showcase-primary">
        <p className="eyebrow">Seasonal Focus</p>
        <h2>Farm-Ready Produce Curated For Weekly Shopping</h2>
        <p>
          Plan faster with grouped essentials, cleaner product visibility, and
          promotions designed around real household buying patterns.
        </p>
        <div className="showcase-pills">
          <span>Fresh arrivals</span>
          <span>Daily essentials</span>
          <span>Smart savings</span>
        </div>
      </div>
      <div className="showcase-stack">
        <article className="showcase-card">
          <h3>Weekly Fruit Box</h3>
          <p>Balanced picks for breakfast, snacks, and smoothie prep.</p>
        </article>
        <article className="showcase-card">
          <h3>Chef Pantry Staples</h3>
          <p>Core grains, oils, and vegetables arranged for quick selection.</p>
        </article>
      </div>
    </section>
  );
}

export default SeasonalShowcase;
