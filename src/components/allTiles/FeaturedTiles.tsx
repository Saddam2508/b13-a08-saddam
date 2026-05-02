import { Tile } from "@/types/tile";
import TilesCard from "../card/TilesCard";
import { fetchTilesData } from "@/helper/fetchData";

const FeaturedTiles = async () => {
  const tilesData = await fetchTilesData();
  if(!tilesData) return <p> No data found</p>
  const tiles: Tile[] =tilesData
  return (
    <div className="container mx-auto my-5 sm:my-10">
      <h2 className="font-bold text-xl text-center sm:text-left md:text-4xl my-3">Feature Tiles</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {tiles.slice(0, 4).map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;
