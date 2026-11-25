import type { InfoPageContent } from "../content.data";

export function InfoPage({ page }: { page: InfoPageContent }) {
  return (
    <>
      <main className="info-page">
        <div className="info-title">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div className="info-sections">
          {page.sections.map((section, index) => (
            <details key={section} open={page.eyebrow === "Centre d’aide" && index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section}
                <i>+</i>
              </summary>
              <p>
                Cette section sera complétée avec les informations officielles de Feeti. Pour toute
                question immédiate, contactez notre équipe à hello@feeti.co.
              </p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
