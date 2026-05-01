"use client";

import { Tile } from "@/types/tile";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface Timeline {
  id: number;
  name: string;
  label: string;
  icon: string;
}

interface TilesContextType {
  tiles: Tile[];
  setTiles: Dispatch<SetStateAction<Tile[]>>;
}

export const TilesContext = createContext<TilesContextType | null>(null);

const TilesProvider = ({ children }: { children: ReactNode }) => {
  const [tiles, setTiles] = useState<Tile[]>([]);

  const data: TilesContextType = {
    tiles,
    setTiles,
  };
  return <TilesContext.Provider value={data}>{children}</TilesContext.Provider>;
};

export default TilesProvider;
