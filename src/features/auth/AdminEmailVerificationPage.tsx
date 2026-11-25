import { useState } from "react";
import { ApiError } from "../../api/ApiError";
import { AppLink } from "../../components/ui/AppLink";
import { navigate } from "../../router/navigate";
import { useAdminEmailVerification } from "./auth.queries";

export function AdminEmailVerificationPage() {
  const verification = useAdminEmailVerification();
  const token = new URLSearchParams(window.location.search).get("token") ?? "";
  const [error, setError] = useState("");

  async function handleVerification() {
    if (!token) {
      setError("Le lien de confirmation est incomplet.");
      return;
    }
    setError("");
    try {
      await verification.mutateAsync(token);
      navigate("/admin/articles");
    } catch (requestError) {
      setError(
        requestError instanceof ApiError ? requestError.message : "La confirmation a échoué.",
      );
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <span className="eyebrow">Compte administrateur</span>
        <h1>Confirmer votre adresse</h1>
        <p>Confirmez votre e-mail pour activer votre compte et ouvrir la gestion du blog.</p>
        {error ? (
          <p className="form-message form-error" role="alert">
            {error}
          </p>
        ) : null}
        <button
          className="button button-dark"
          type="button"
          onClick={handleVerification}
          aria-busy={verification.isPending}
        >
          {verification.isPending ? "Confirmation en cours…" : "Confirmer mon adresse"}
        </button>
        <p className="auth-switch">
          <AppLink href="/connexion">Retour à la connexion</AppLink>
        </p>
      </section>
    </main>
  );
}
