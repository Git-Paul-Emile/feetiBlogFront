import { AppLink } from "./AppLink";

export function Logo() {
  return (
    <AppLink href="/" className="logo" aria-label="Feeti, accueil">
      <span className="logo-mark">
        <i />
        <i />
        <i />
      </span>
      <span>feeti</span>
    </AppLink>
  );
}
