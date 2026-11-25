import { z } from "zod";

const cloudinaryImageUrl = z
  .string()
  .trim()
  .max(2048)
  .refine((value) => {
    if (value === "") return true;
    try {
      const imageUrl = new URL(value);
      return imageUrl.protocol === "https:" && imageUrl.hostname === "res.cloudinary.com";
    } catch {
      return false;
    }
  }, "Importez une image Cloudinary avant de l’enregistrer.");

export const articleInputSchema = z
  .strictObject({
    title: z.string().trim().min(5, "Le titre doit contenir au moins 5 caractères.").max(180),
    slug: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .optional(),
    categorySlug: z
      .string()
      .trim()
      .min(2)
      .max(80)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    excerpt: z.string().trim().min(10, "Le résumé doit contenir au moins 10 caractères.").max(320),
    lead: z
      .string()
      .trim()
      .min(20, "L’introduction doit contenir au moins 20 caractères.")
      .max(1200),
    imageUrl: cloudinaryImageUrl,
    imagePublicId: z.string().max(255).optional(),
    sections: z
      .array(
        z.strictObject({
          title: z.string().trim().min(3, "Chaque section doit avoir un titre.").max(160),
          paragraphs: z
            .array(z.string().trim().min(1).max(4000))
            .min(1, "Chaque section doit contenir un paragraphe.")
            .max(8),
        }),
      )
      .min(1, "Ajoutez au moins une section.")
      .max(20),
  })
  .superRefine((article, context) => {
    if (article.imageUrl && !article.imagePublicId) {
      context.addIssue({
        code: "custom",
        path: ["imagePublicId"],
        message: "Importez l’image dans Cloudinary avant de l’enregistrer.",
      });
    }
  });
