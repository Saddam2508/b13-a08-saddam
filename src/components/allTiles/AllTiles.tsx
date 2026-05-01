import React from "react";
import TilesCard from "../card/TilesCard";
import { fetchTilesData } from "@/helper/fetchData";
import { Search } from "../search/Search";

const AllTiles = async () => {
  const tiles = await fetchTilesData();
  return (
    <div className="container mx-auto mt-30">
      <Search />
      <h2 className="font-bold text-4xl my-3">The Gallery</h2>
      <div className="grid grid-cols-4 gap-5">
        {tiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;
