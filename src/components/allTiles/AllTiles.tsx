"use client";

import React, { useContext, useEffect } from "react";

import { Search } from "../search/Search";
import { TilesContext } from "@/context/TilesContext";
import AllTilesCard from "../card/AllTilesCard";
import { Tile } from "@/types/tile";

const AllTiles = ({ tilesData }: { tilesData: Tile[] }) => {
  const context = useContext(TilesContext);
  if (!context) {
    throw new Error("useTiles must be used within TilesProvider");
  }
  const { tiles, setTiles, setAllTiles } = context;

  useEffect(() => {
    setTiles(tilesData);
    setAllTiles(tilesData);
  }, [tilesData, setTiles, setAllTiles]);

  if (!tiles) return <p> No data found</p>;
  return (
    <div className="container mx-auto mt-30">
      <Search />
      <h2 className="font-bold text-[1.75rem] text-center sm:text-left sm:text-4xl my-3">
        The Gallery
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {tiles.map((tile) => (
          <AllTilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;
