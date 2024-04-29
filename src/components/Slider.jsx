"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwipperCore, { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGES } from "@/constants";

const Slider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(255, 255, 255, 0.5)",
          "--swiper-pagination-color": "rgba(255, 255, 255, 0.5)",
        }}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-96 xl:h-[600px] w-full"
      >
        {IMAGES.map((image) => (
          <SwiperSlide>
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
