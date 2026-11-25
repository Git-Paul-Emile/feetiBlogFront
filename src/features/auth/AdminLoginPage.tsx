import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ApiError } from "../../api/ApiError";
import { AppLink } from "../../components/ui/AppLink";
import { navigate } from "../../router/navigate";
import { adminLoginSchema } from "./auth.schemas";
import { useAdminLogin } from "./auth.queries";

export function AdminLoginPage() {
  const login = useAdminLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const result = adminLoginSchema.safeParse({ email, password });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Vérifiez les informations saisies.");
      return;
    }
    try {
      await login.mutateAsync(result.data);
      navigate("/admin/articles");
    } catch (requestError) {
      setError(requestError instanceof ApiError ? requestError.message : "La connexion a échoué.");
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Espace administrateur</span>
        <h1>Connexion</h1>
        <p>Connectez-vous pour gérer les articles de Feeti Blog.</p>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="admin-email">Adresse e-mail</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="admin-password">Mot de passe</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error ? (
            <p className="form-message form-error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="button button-dark" type="submit" aria-busy={login.isPending}>
            {login.isPending ? "Connexion en cours…" : "Se connecter"}
          </button>
        </form>
        <p className="auth-switch">
          Pas encore de compte ? <AppLink href="/inscription">Inscription administrateur</AppLink>
        </p>
      </section>
    </main>
  );
}
