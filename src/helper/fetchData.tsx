import { Tile } from "@/types/tile";

export const fetchTilesData = async () => {
  const data = await fetch("http://localhost:3000/tiles_data.json");
  const tiles: Tile[] = await data.json();
  return tiles;
};
