import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export type TableDataT = {
  data: [];
  totalCount: number;
  isSuccess: boolean;
  error: string;
  isLoading: boolean;
};

export type ColumnT = {
  header: string | ReactNode;
  name?: string;
  width?: string;
  maxWidth?: string;
  filterable?: boolean;
  value: (cell: any, i?: number) => JSX.Element;
};

export type FilterT = {
  pageSize: number;
  pageIndex: number;
  sortBy: string;
  search: string;
  sortDirection: boolean;
  updateData: boolean;
};

// TODO: Make change this to according the data
export type ProductT = {
  id: number;
  name: string;
  image: string | StaticImport;
  quantity: number;
  basePrice: string;
  price: string;
  links: string[];
};
