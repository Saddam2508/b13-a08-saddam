import FeaturedTiles from "@/components/allTiles/FeaturedTiles";
import Banner from "@/components/banner/Banner";
import Scroll from "@/components/scroll/Scroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | category-A8-Apple",
};

export default function Home() {
  return (
    <div className="mt-17">
      <Banner />
      <Scroll />
      <FeaturedTiles />
    </div>
  );
}
