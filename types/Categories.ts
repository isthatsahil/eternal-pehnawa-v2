import { PaginationMeta } from "./PaginationMeta";

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  products: number;
  created: number;
  meta: any;
};

export type CategoryCollection = {
  data: Category[];
  meta: PaginationMeta;
};
