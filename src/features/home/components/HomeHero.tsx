export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <span className="eyebrow">Pensé pour les créateurs d’événements</span>
        <h1>
          Votre événement.
          <br />
          <em>Plus loin.</em>
        </h1>
        <p>
          Créez, vendez, rassemblez. Feeti réunit tous les outils dont vous avez besoin pour
          transformer une idée en expérience inoubliable.
        </p>
        <div className="hero-actions">
          <a className="button button-green" href="mailto:hello@feeti.co">
            Créer un événement <span>↗</span>
          </a>
          <a href="#produits" className="text-link">
            Découvrir la plateforme <span>↓</span>
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <style>{`
              .hero-photo .hero-slide {
                position: absolute;
                inset: 0;
                opacity: 0;
                animation: feetiHeroSlide 15s infinite;
                will-change: opacity, transform;
              }
              .hero-photo .hero-slide:nth-of-type(2) { animation-delay: 5s; }
              .hero-photo .hero-slide:nth-of-type(3) { animation-delay: 10s; }
              .hero-photo .hero-slide > img {
                position: absolute;
                inset: 0;
                transform: scale(1.04);
                animation: feetiHeroZoom 15s infinite;
              }
              .hero-photo .hero-slide:nth-of-type(2) > img { animation-delay: 5s; }
              .hero-photo .hero-slide:nth-of-type(3) > img { animation-delay: 10s; }
              .hero-photo .hero-slide .floating-card,
              .hero-photo .hero-slide .photo-label {
                opacity: 0;
                transform: translateY(14px);
                animation: feetiHeroCopy 15s infinite;
              }
              .hero-photo .hero-slide:nth-of-type(2) .floating-card,
              .hero-photo .hero-slide:nth-of-type(2) .photo-label { animation-delay: 5s; }
              .hero-photo .hero-slide:nth-of-type(3) .floating-card,
              .hero-photo .hero-slide:nth-of-type(3) .photo-label { animation-delay: 10s; }
              .hero-photo .slider-dots {
                position: absolute;
                z-index: 4;
                right: 32px;
                bottom: 34px;
                display: flex;
                gap: 7px;
              }
              .hero-photo .slider-dots i {
                width: 6px;
                height: 6px;
                border-radius: 99px;
                background: rgba(255,255,255,.48);
                animation: feetiHeroDot 15s infinite;
              }
              .hero-photo .slider-dots i:nth-child(2) { animation-delay: 5s; }
              .hero-photo .slider-dots i:nth-child(3) { animation-delay: 10s; }
              .hero-photo:hover .hero-slide,
              .hero-photo:hover .hero-slide > img,
              .hero-photo:hover .hero-slide .floating-card,
              .hero-photo:hover .hero-slide .photo-label,
              .hero-photo:hover .slider-dots i { animation-play-state: paused; }
              @keyframes feetiHeroSlide {
                0% { opacity: 0; }
                4%, 30% { opacity: 1; }
                34%, 100% { opacity: 0; }
              }
              @keyframes feetiHeroZoom {
                0% { transform: scale(1.06); }
                4% { transform: scale(1.04); }
                30% { transform: scale(1); }
                34%, 100% { transform: scale(1); }
              }
              @keyframes feetiHeroCopy {
                0%, 5% { opacity: 0; transform: translateY(14px); }
                10%, 28% { opacity: 1; transform: translateY(0); }
                32%, 100% { opacity: 0; transform: translateY(-8px); }
              }
              @keyframes feetiHeroDot {
                0%, 3% { width: 6px; background: rgba(255,255,255,.48); }
                6%, 30% { width: 24px; background: #16bda0; }
                34%, 100% { width: 6px; background: rgba(255,255,255,.48); }
              }
              @media (prefers-reduced-motion: reduce) {
                .hero-photo .hero-slide:first-of-type { opacity: 1; }
                .hero-photo .hero-slide,
                .hero-photo .hero-slide > img,
                .hero-photo .hero-slide .floating-card,
                .hero-photo .hero-slide .photo-label,
                .hero-photo .slider-dots i { animation: none; }
                .hero-photo .hero-slide:first-of-type .floating-card,
                .hero-photo .hero-slide:first-of-type .photo-label { opacity: 1; transform: none; }
              }
            `}</style>
        <div className="hero-slide">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85"
            alt="Foule réunie devant une scène de concert"
          />
          <div className="floating-card">
            <span>Ventes en direct</span>
            <b>+ 1 284 billets</b>
            <i>Cette semaine</i>
          </div>
          <div className="photo-label">
            La foule est prête.
            <br />
            Et vous ?
          </div>
        </div>
        <div className="hero-slide">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85"
            alt="Public enthousiaste levant les mains pendant un festival"
          />
          <div className="floating-card">
            <span>Participants présents</span>
            <b>92% scannés</b>
            <i>Entrées en temps réel</i>
          </div>
          <div className="photo-label">
            Une entrée fluide.
            <br />
            Une énergie intacte.
          </div>
        </div>
        <div className="hero-slide">
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85"
            alt="Grande scène de festival devant une foule"
          />
          <div className="floating-card">
            <span>Votre communauté</span>
            <b>+ 24% d’engagement</b>
            <i>Après l’événement</i>
          </div>
          <div className="photo-label">
            Un soir mémorable.
            <br />
            Un public fidèle.
          </div>
        </div>
        <div className="slider-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </section>
  );
}
