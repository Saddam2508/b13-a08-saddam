import FeaturedTiles from "@/components/allTiles/FeaturedTiles";
import Banner from "@/components/banner/Banner";
import Scroll from "@/components/scroll/Scroll";

export default function Home() {
  return (
    <div>
      <Banner />
      <Scroll />
      <FeaturedTiles />
    </div>
  );
}
