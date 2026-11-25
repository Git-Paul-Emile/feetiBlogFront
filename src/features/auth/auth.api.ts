import { apiRequest } from "../../api/client";
import type { AdminLoginInput, AdminRegistrationInput, AdminSession } from "./auth.types";

export const authApi = {
  session: () => apiRequest<AdminSession>("/auth/session"),
  login: (input: AdminLoginInput) =>
    apiRequest<AdminSession>("/auth/sessions", { method: "POST", body: JSON.stringify(input) }),
  register: (input: AdminRegistrationInput) =>
    apiRequest<{ emailConfirmationRequired: true }>("/auth/admin-registrations", {
      method: "POST",
      body: JSON.stringify(input),
    }),
  verifyEmail: (token: string) =>
    apiRequest<AdminSession>("/auth/email-verifications", {
      method: "POST",
      body: JSON.stringify({ token }),
    }),
  logout: () => apiRequest<{ loggedOut: true }>("/auth/session", { method: "DELETE" }),
};
