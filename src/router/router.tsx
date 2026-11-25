import { articles, infoPages } from "../features/content/content.data";
import { ArticlePage } from "../features/content/pages/ArticlePage";
import { BlogPage } from "../features/content/pages/BlogPage";
import { InfoPage } from "../features/content/pages/InfoPage";
import { TutorialsPage } from "../features/content/pages/TutorialsPage";
import { products } from "../features/products/products.data";
import { ProductPage } from "../features/products/pages/ProductPage";
import { RegiePage } from "../features/regie/pages/RegiePage";
import { usePathname } from "../hooks/usePathname";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function AppRouter() {
  const path = usePathname();
  const match = path.match(/^\/produits\/([^/]+)\/?$/);
  const product = match ? products.find((item) => item.slug === match[1]) : undefined;
  const articleMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  const article = articleMatch ? articles.find((item) => item.slug === articleMatch[1]) : undefined;

  if (path === "/" || path === "") return <HomePage />;
  if (path === "/tutoriels") return <TutorialsPage />;
  if (path === "/blog") return <BlogPage />;
  if (path === "/regie") return <RegiePage />;
  if (article) return <ArticlePage article={article} />;
  if (product) return <ProductPage product={product} />;

  const infoPage = infoPages[path.replace(/^\//, "")];
  if (infoPage) return <InfoPage page={infoPage} />;

  return <NotFoundPage />;
}
