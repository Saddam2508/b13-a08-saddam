import DetailsCard from "@/components/card/DetailsCard";
import { fetchTilesData } from "@/helper/fetchData";

const TilesDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const allTiles = await fetchTilesData();
  if(!allTiles) return <p> No data found</p>
  const selectedTile = allTiles.find((tile) => tile.id === id);
  if (!selectedTile) return;
  return (
    <div>
      <DetailsCard selectedTile={selectedTile} />
    </div>
  );
};

export default TilesDetailsPage;
