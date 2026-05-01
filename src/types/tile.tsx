export type TileCategory =
  | "ceramic"
  | "marble"
  | "granite"
  | "porcelain"
  | "wood"
  | "stone"
  | "mosaic"
  | "outdoor"
  | "luxury"
  | "industrial";

export interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TileCategory;
  price: number;
  currency: string;
  dimensions: string;
  material: string;
  inStock: boolean;
  creator: string;
  tags: string[];
  rating: number;
}
