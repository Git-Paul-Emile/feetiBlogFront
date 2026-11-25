import { useState } from "react";
import { CtaSection } from "../../../components/ui/CtaSection";
import {
  ContentEmpty,
  ContentError,
  ContentLoading,
} from "../../../components/feedback/ContentStates";
import { useTutorials } from "../content.queries";

export function TutorialsPage() {
  const tutorialsQuery = useTutorials();
  const [selected, setSelected] = useState(0);
  if (tutorialsQuery.isPending) return <ContentLoading label="Chargement des tutoriels…" />;
  if (tutorialsQuery.isError) return <ContentError />;
  const tutorials = tutorialsQuery.data.items;
  if (tutorials.length === 0)
    return <ContentEmpty label="Aucun tutoriel n’est encore disponible." />;
  const currentIndex = Math.min(selected, tutorials.length - 1);
  const tutorial = tutorials[currentIndex];
  if (!tutorial) return <ContentEmpty label="Aucun tutoriel n’est encore disponible." />;
  return (
    <>
      <main>
        <section className="editorial-hero tutorial-hero">
          <span className="eyebrow">Feeti Academy · Tutoriels vidéo</span>
          <h1>
            Faites-le avec
            <br />
            <em>Feeti.</em>
          </h1>
          <p>Des vidéos courtes et concrètes pour maîtriser chaque fonction, à votre rythme.</p>
        </section>
        <section className="featured-video">
          <div className="video-stage" style={{ backgroundImage: `url(${tutorial.image})` }}>
            <button type="button" aria-label={`Lire ${tutorial.title}`}>
              <span>▶</span>
              <small>Vidéo bientôt disponible</small>
            </button>
            <div className="video-time">{tutorial.duration}</div>
          </div>
          <div className="video-copy">
            <span>
              {tutorial.level} · Tutoriel {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            <div>
              <b>Dans cette vidéo</b>
              <small>Configuration pas à pas</small>
              <small>Conseils de l’équipe Feeti</small>
              <small>Erreurs fréquentes à éviter</small>
            </div>
          </div>
        </section>
        <section className="tutorial-library">
          <div className="library-head">
            <div>
              <span className="eyebrow">La vidéothèque</span>
              <h2>Apprendre, simplement.</h2>
            </div>
            <span>{tutorials.length} tutoriels</span>
          </div>
          <div className="tutorial-grid">
            {tutorials.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  setSelected(index);
                  window.scrollTo({ top: 520, behavior: "smooth" });
                }}
                className={currentIndex === index ? "selected" : ""}
              >
                <div className="tutorial-thumb">
                  <img src={item.image} alt="" />
                  <span>▶</span>
                  <small>{item.duration}</small>
                </div>
                <div>
                  <small>{item.level}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
    </>
  );
}
