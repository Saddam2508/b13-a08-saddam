import { fetchTilesData } from "@/helper/fetchData";
import React from "react";

const TilesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const allTiles = await fetchTilesData();
  const selectedTile = allTiles.find((tile) => tile.id === id);
  console.log(selectedTile);
  return <div></div>;
};

export default TilesDetailsPage;
