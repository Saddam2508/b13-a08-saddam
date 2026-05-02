import { Tile } from "@/types/tile";

export const fetchTilesData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/tiles_data.json`);

  if (!res.ok) return null;

  const tiles: Tile[] = await res.json();
  return tiles;
};
