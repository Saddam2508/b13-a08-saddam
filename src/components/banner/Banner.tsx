import Image from "next/image";
import React from "react";
const im = "https://www.kajariaceramics.com/storage/banner/desktop-banner.webp";
const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={im}
        alt="image"
        width={1000}
        height={800}
        className="w-full"
      />
      <button className="btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Browse Now</button>
    </div>
  );
};

export default Banner;
