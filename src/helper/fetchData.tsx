import { Tile } from "@/types/tile";

export const fetchTilesData = async () => {
  const data = await fetch(`${process.env.BETTER_AUTH_URL}/tiles_data.json`);
  if (!data) return null;
  const tiles: Tile[] = await data.json();
  return tiles;
};
