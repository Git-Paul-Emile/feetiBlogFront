import { AppLink } from "../components/ui/AppLink";

export function NotFoundPage() {
  return (
    <>
      <main className="not-found">
        <span>404</span>
        <h1>Cette page n’existe pas encore.</h1>
        <AppLink href="/" className="button button-dark">
          Revenir à l’accueil
        </AppLink>
      </main>
    </>
  );
}
