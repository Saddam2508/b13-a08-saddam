import AllTiles from "@/components/allTiles/AllTiles";
import { fetchTilesData } from "@/helper/fetchData";
import { Tile } from "@/types/tile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tiles | category-A8-Apple",
};

const AllTilesPage = async () => {
  const tilesDatas = await fetchTilesData();
  if (!tilesDatas) return <p> No data found</p>;
  const tilesData: Tile[] = tilesDatas;
  return (
    <div>
      <AllTiles tilesData={tilesData} />
    </div>
  );
};

export default AllTilesPage;
