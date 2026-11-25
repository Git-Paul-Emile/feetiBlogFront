import { apiRequest } from "../../api/client";
import type { CollectionPage } from "../../api/types";
import type { Product } from "./products.types";

export const productsApi = {
  list: () => apiRequest<CollectionPage<Product>>("/products?page=1&limit=100"),
  get: (slug: string) => apiRequest<Product>(`/products/${encodeURIComponent(slug)}`),
};
