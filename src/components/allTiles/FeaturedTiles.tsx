import { Tile } from "@/types/tile";
import TilesCard from "../card/TilesCard";

const FeaturedTiles = async () => {
  const data = await fetch("http://localhost:3000/tiles_data.json");
  const tiles: Tile[] = await data.json();
  console.log(tiles);
  return (
    <div className="container mx-auto my-10">
      <h2 className="font-bold text-4xl my-3">Feature Tiles</h2>
      <div className="grid grid-cols-4 gap-5">
        {tiles.slice(0, 4).map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
