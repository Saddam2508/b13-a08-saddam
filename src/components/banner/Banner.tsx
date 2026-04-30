"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const bannersData = [
    {name: "banner1", url: "https://www.kajariaceramics.com/storage/banner/desktop-banner.webp"},
    {name: "banner2", url: "https://www.kajariaceramics.com/storage/banner/kajaria-living-desktop-2.webp"},
    {name: "banner3", url: "https://www.kajariaceramics.com/storage/banner/kajaria-kitchen-dektop.webp"},
    {name: "banner4", url: "https://www.kajariaceramics.com/storage/banner/kajaria-bathroom-desktop.webp"},
    {name: "banner5", url: "https://www.kajariaceramics.com/storage/banner/kajaria-outdoor-dektop1.webp"},
]
const Banner = () => {
  return (
    <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{
    delay: 3000, 
    disableOnInteraction: false,
     
  }} loop={true}>
    
        {bannersData.map((b, idx)=>(
              <SwiperSlide key={idx}>
            <div className="relative" >
          <Image
            src={b.url}
            alt="image"
            width={1000}
            height={800}
            className="w-full"
          />
          <button className="btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Browse Now
          </button>
        </div>
        </SwiperSlide>
        ))}
      
    </Swiper>
  );
};

export default Banner;
