import { useState } from "react";

export function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <section className="newsletter">
      <div className="newsletter-stamp">
        Chaque
        <br />
        vendredi
      </div>
      <div className="newsletter-copy">
        <span className="eyebrow">La newsletter Feeti</span>
        <h2>
          Recevez « Les Fééties
          <br />
          de la semaine »
        </h2>
        <p>
          Une sélection courte d’idées, de tendances et de bonnes pratiques pour faire grandir vos
          événements.
        </p>
      </div>
      {sent ? (
        <div className="newsletter-success">
          <b>Vous êtes sur la liste.</b>
          <span>Rendez-vous vendredi dans votre boîte mail.</span>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label htmlFor="newsletter-email">Votre adresse email</label>
          <div>
            <input id="newsletter-email" type="email" placeholder="vous@exemple.com" required />
            <button type="submit" aria-label="S’inscrire à la newsletter">
              S’inscrire <span>↗</span>
            </button>
          </div>
          <small>Pas de bruit. Uniquement de l’utile. Désinscription en un clic.</small>
        </form>
      )}
    </section>
  );
}
