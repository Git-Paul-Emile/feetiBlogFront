import { z } from "zod";

const emailSchema = z.string().trim().email("Saisissez une adresse e-mail valide.").max(254);
const passwordSchema = z
  .string()
  .min(12, "Le mot de passe doit contenir au moins 12 caractères.")
  .max(128);

export const adminLoginSchema = z.strictObject({
  email: emailSchema,
  password: z.string().min(1, "Saisissez votre mot de passe.").max(128),
});

export const adminRegistrationSchema = z.strictObject({
  email: emailSchema,
  name: z.string().trim().min(2, "Saisissez votre nom.").max(80),
  password: passwordSchema,
  registrationSecret: z
    .string()
    .min(32, "Saisissez le code d’invitation fourni par l’administrateur.")
    .max(256),
});
