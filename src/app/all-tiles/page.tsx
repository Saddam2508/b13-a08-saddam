import AllTiles from "@/components/allTiles/AllTiles";
import { fetchTilesData } from "@/helper/fetchData";
import { Tile } from "@/types/tile";

const AllTilesPage = async () => {
  const tilesDatas = await fetchTilesData();
  if (!tilesDatas) return <p> No data found</p>;
  const tilesData: Tile[] = tilesDatas;
  console.log("AllTilesPage", tilesData);
  return (
    <div>
      <AllTiles tilesData={tilesData} />
    </div>
  );
};

export default AllTilesPage;
