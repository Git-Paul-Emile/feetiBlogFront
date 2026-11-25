export function MethodSection() {
  return (
    <section className="method-section" id="methode">
      <div className="method-photo">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85"
          alt="Public enthousiaste lors d’un festival"
        />
        <span>Des moments qui comptent</span>
      </div>
      <div className="method-copy">
        <span className="eyebrow">Pourquoi?{"\u00a0\u00a0"}</span>
        <h2>
          La technologie s’efface.
          <br />
          L’expérience reste.
        </h2>
        <p>
          Feeti a été imaginé pour les réalités des créateurs d’ici : des équipes agiles, des
          publics mobiles et des ambitions sans frontières.
        </p>
        <ul>
          <li>
            <span>01</span>
            <div>
              <b>Simple dès le premier jour</b>
              <small>Pas besoin d’être expert pour lancer et piloter votre événement.</small>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <b>Conçu pour convertir</b>
              <small>Chaque écran facilite la découverte, l’achat et la participation.</small>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <b>Une équipe à vos côtés</b>
              <small>De vraies personnes vous accompagnent quand le moment compte.</small>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
