import { platformLinks } from "../../platformLinks";

export function CtaSection() {
  return (
    <section className="cta-section">
      <span className="eyebrow">Votre prochain succès commence ici</span>
      <h2>
        Prêt à faire vibrer
        <br />
        votre public ?
      </h2>
      <p>Créez votre événement avec Feeti ou échangez avec notre équipe.</p>
      <div>
        <a className="button button-green" href={platformLinks.ticket}>
          Commencer maintenant <span>↗</span>
        </a>
        <a className="button button-outline" href="mailto:hello@feeti.co">
          Parler à un expert
        </a>
      </div>
    </section>
  );
}
