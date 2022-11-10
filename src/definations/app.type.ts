import { showComponents } from '../mock/store.mock';

export type _Show = typeof showComponents;

export type PageResponseType = {
  id: string | number;
  slug: string;
  store_id: number | string;
  type: string;
};
