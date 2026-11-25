import { ApiError } from "./ApiError";

const apiBaseUrl = (import.meta.env.VITE_BLOG_API_BASE_URL || "/api/v1").replace(/\/$/, "");

interface SuccessEnvelope<Data> {
  success: true;
  status: number;
  message: string;
  data: Data;
}

interface ErrorEnvelope {
  success: false;
  message: string;
  error?: { code?: string };
}

export async function apiRequest<Data>(path: string, init: RequestInit = {}): Promise<Data> {
  let response: Response;
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        ...(init.body && !(init.body instanceof FormData)
          ? { "Content-Type": "application/json" }
          : {}),
        ...init.headers,
      },
    });
  } catch {
    throw new ApiError("Impossible de joindre l’API Feeti Blog.", 0);
  }

  if (response.status === 204) return undefined as Data;

  const payload: unknown = await response.json().catch(() => undefined);
  if (!response.ok) {
    const error = isErrorEnvelope(payload) ? payload : undefined;
    throw new ApiError(
      error?.message ?? "Une erreur est survenue.",
      response.status,
      error?.error?.code,
    );
  }

  if (!isSuccessEnvelope<Data>(payload)) {
    throw new ApiError("La réponse de l’API est invalide.", response.status);
  }

  return payload.data;
}

function isErrorEnvelope(value: unknown): value is ErrorEnvelope {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === false &&
    "message" in value &&
    typeof value.message === "string"
  );
}

function isSuccessEnvelope<Data>(value: unknown): value is SuccessEnvelope<Data> {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true &&
    "data" in value
  );
}
