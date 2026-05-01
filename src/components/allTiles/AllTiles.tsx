"use client";

import React, { useContext, useEffect } from "react";
import { fetchTilesData } from "@/helper/fetchData";
import { Search } from "../search/Search";
import { TilesContext } from "@/context/TilesContext";
import AllTilesCard from "../card/AllTilesCard";

const AllTiles = () => {
  const context = useContext(TilesContext);
  if (!context) {
    throw new Error("useTiles must be used within TilesProvider");
  }
  const { tiles, setTiles, setAllTiles } = context;

  useEffect(() => {
    const loadTiles = async () => {
      const data = await fetchTilesData();
      setTiles(data);
      setAllTiles(data);
    };
    loadTiles();
  }, []);

  return (
    <div className="container mx-auto mt-30">
      <Search />
      <h2 className="font-bold text-4xl my-3">The Gallery</h2>
      <div className="grid grid-cols-4 gap-5">
        {tiles.map((tile) => (
          <AllTilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;
