import type { InfoPageContent } from "../content.types";
import { ContentError, ContentLoading } from "../../../components/feedback/ContentStates";
import { useInfoPage } from "../content.queries";

export function InfoRoutePage({ slug }: { slug: string }) {
  const pageQuery = useInfoPage(slug);
  if (pageQuery.isPending) return <ContentLoading label="Chargement de la page…" />;
  if (pageQuery.isError)
    return <ContentError message="Cette page est introuvable ou indisponible." />;
  if (!pageQuery.data)
    return <ContentError message="Cette page est introuvable ou indisponible." />;
  return <InfoPage page={pageQuery.data} />;
}

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
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
