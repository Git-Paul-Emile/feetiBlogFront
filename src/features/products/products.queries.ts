import { useQuery } from "@tanstack/react-query";
import { productsApi } from "./products.api";

export const productQueryKeys = {
  list: ["products"] as const,
  detail: (slug: string) => ["products", slug] as const,
};

export function useProducts() {
  return useQuery({ queryKey: productQueryKeys.list, queryFn: productsApi.list });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: productQueryKeys.detail(slug),
    queryFn: () => productsApi.get(slug),
    enabled: Boolean(slug),
  });
}
