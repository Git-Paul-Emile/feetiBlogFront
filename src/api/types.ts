export interface CollectionPage<Item> {
  items: Item[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    hasNext: boolean;
  };
}
