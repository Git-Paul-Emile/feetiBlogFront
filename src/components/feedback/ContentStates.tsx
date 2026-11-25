export function ContentLoading({ label = "Chargement du contenu…" }: { label?: string }) {
  return (
    <p className="content-state" role="status">
      {label}
    </p>
  );
}

export function ContentError({
  message = "Le contenu est momentanément indisponible.",
}: {
  message?: string;
}) {
  return (
    <p className="content-state content-state-error" role="alert">
      {message}
    </p>
  );
}

export function ContentEmpty({ label }: { label: string }) {
  return <p className="content-state">{label}</p>;
}
