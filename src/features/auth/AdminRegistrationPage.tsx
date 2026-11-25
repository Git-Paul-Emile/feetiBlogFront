import { useState, type FormEvent } from "react";
import { ApiError } from "../../api/ApiError";
import { AppLink } from "../../components/ui/AppLink";
import { adminRegistrationSchema } from "./auth.schemas";
import { useAdminRegistration } from "./auth.queries";

export function AdminRegistrationPage() {
  const registration = useAdminRegistration();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSecret, setRegistrationSecret] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const result = adminRegistrationSchema.safeParse({ name, email, password, registrationSecret });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Vérifiez les informations saisies.");
      return;
    }
    try {
      await registration.mutateAsync(result.data);
      setSubmitted(true);
    } catch (requestError) {
      setError(requestError instanceof ApiError ? requestError.message : "L’inscription a échoué.");
    }
  }

  if (submitted) {
    return (
      <main className="auth-page">
        <section className="auth-card" aria-live="polite">
          <span className="eyebrow">Vérification de l’adresse</span>
          <h1>Consultez vos e-mails</h1>
          <p>Un lien de confirmation a été envoyé à {email}. Il sera valable pendant 24 heures.</p>
          <AppLink href="/connexion" className="button button-dark">
            Retour à la connexion
          </AppLink>
        </section>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Compte administrateur</span>
        <h1>Inscription</h1>
        <p>Cette inscription crée un compte administrateur. Un code d’invitation est requis.</p>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="admin-name">Nom</label>
          <input
            id="admin-name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="admin-register-email">Adresse e-mail</label>
          <input
            id="admin-register-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="admin-register-password">Mot de passe, 12 caractères minimum</label>
          <input
            id="admin-register-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="admin-registration-secret">Code d’invitation administrateur</label>
          <input
            id="admin-registration-secret"
            type="password"
            autoComplete="off"
            value={registrationSecret}
            onChange={(event) => setRegistrationSecret(event.target.value)}
          />
          {error ? (
            <p className="form-message form-error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="button button-dark" type="submit" aria-busy={registration.isPending}>
            {registration.isPending ? "Création du compte…" : "Créer le compte administrateur"}
          </button>
        </form>
        <p className="auth-switch">
          Déjà inscrit ? <AppLink href="/connexion">Se connecter</AppLink>
        </p>
      </section>
    </main>
  );
}
