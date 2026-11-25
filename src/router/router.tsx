import { ArticleRoutePage } from "../features/content/pages/ArticlePage";
import { BlogPage } from "../features/content/pages/BlogPage";
import { InfoRoutePage } from "../features/content/pages/InfoPage";
import { TutorialsPage } from "../features/content/pages/TutorialsPage";
import { ProductRoutePage } from "../features/products/pages/ProductPage";
import { AdminLoginPage } from "../features/auth/AdminLoginPage";
import { AdminRegistrationPage } from "../features/auth/AdminRegistrationPage";
import { AdminEmailVerificationPage } from "../features/auth/AdminEmailVerificationPage";
import { AdminArticlesPage } from "../features/content/pages/AdminArticlesPage";
import { RegiePage } from "../features/regie/pages/RegiePage";
import { usePathname } from "../hooks/usePathname";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function AppRouter() {
  const path = usePathname();
  const match = path.match(/^\/produits\/([^/]+)\/?$/);
  const productSlug = match?.[1];
  const articleMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  const articleSlug = articleMatch?.[1];

  if (path === "/" || path === "") return <HomePage />;
  if (path === "/tutoriels") return <TutorialsPage />;
  if (path === "/blog") return <BlogPage />;
  if (path === "/connexion") return <AdminLoginPage />;
  if (path === "/inscription") return <AdminRegistrationPage />;
  if (path === "/verifier-email") return <AdminEmailVerificationPage />;
  if (path === "/admin/articles") return <AdminArticlesPage />;
  if (path === "/regie") return <RegiePage />;
  if (articleSlug) return <ArticleRoutePage slug={articleSlug} />;
  if (productSlug) return <ProductRoutePage slug={productSlug} />;

  if (
    [
      "faqs",
      "brand-presse",
      "mentions-legales",
      "cgu",
      "confidentialite",
      "remboursement",
    ].includes(path.replace(/^\//, ""))
  ) {
    return <InfoRoutePage slug={path.replace(/^\//, "")} />;
  }

  return <NotFoundPage />;
}
