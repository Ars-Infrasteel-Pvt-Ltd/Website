export type DataCenterProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
};