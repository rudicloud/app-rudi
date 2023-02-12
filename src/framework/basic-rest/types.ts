import { QueryKey } from 'react-query';

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};
export interface LoginUserInput {
  email: string;
  password: string;
}
export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Category = {
  _id: number | string;
  name: string;
  slug: string;
  details?: string;
  image_original: string;
  icon?: string;
  children?: [Category];
  products?: Product[];
  productCount?: number;
  [key: string]: unknown;
};
export type Collection = {
  _id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  _id: number | string;
  name: string;
  slug: string;
  image?: Attachment;
  [key: string]: unknown;
};
export type Tag = {
  _id: string | number;
  name: string;
  slug: string;
};
export type Product = {
  _id: number | string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  sold: number;
  unit: string;
  sale_price?: number;
  min_price?: number;
  max_price?: number;
  image: Attachment;
  sku?: string;
  gallery?: Attachment[];
  category?: Category;
  tag?: Tag[];
  meta?: any[];
  brand?: Brand;
  description?: string;
  variations?: object;
  [key: string]: unknown;
};
export type OrderItem = {
  _id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  _id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};


export type SchoolSlides = {
  _id: string | number;
  slug: string;
  image_original: string;
  title: string;
  description: string;
};
export type MobileBanner = {
  _id: string | number;
  image: string;
  name: string;
};
