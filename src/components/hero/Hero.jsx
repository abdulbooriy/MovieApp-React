import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import panda__image from "@/assets/images/panda__image.png";
import soldiers__image from "@/assets/images/soldiers__image.webp";
import minecraft__image from "@/assets/images/minecraft__image.webp";
import tin__soldiers__image from "@/assets/images/tin_soldiers__image.webp";
import last__bullet__image from "@/assets/images/last__bullet__image.webp";
import snow__white__image from "@/assets/images/snow__white__image.webp";
import avengers__image from "@/assets/images/avengers__image.webp";
import exterritorial__image from "@/assets/images/exterritorial__image.webp";
import rust__image from "@/assets/images/rust__image.webp";
import moana__image from "@/assets/images/moana__image.webp";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const heroImages = [
    { src: panda__image, alt: "first hero image" },
    { src: soldiers__image, alt: "second hero image" },
    { src: minecraft__image, alt: "third hero image" },
    { src: tin__soldiers__image, alt: "fourth hero image" },
    { src: last__bullet__image, alt: "fifth hero image" },
    { src: snow__white__image, alt: "sixth hero image" },
    { src: avengers__image, alt: "seventh hero image" },
    { src: exterritorial__image, alt: "eighth hero image" },
    { src: rust__image, alt: "ninth hero image" },
    { src: moana__image, alt: "tenth hero image" },
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[1360px] h-[640px] rounded-[12px] mx-auto">
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center w-[100%] max-w-[950px] mx-auto mt-4 gap-3">
        <button className="custom-prev w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl">
          <FaAngleLeft />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-[850px] rounded-[12px]">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="rounded-[12px] h-[127px]"
                src={img.src}
                alt={img.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-next w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl">
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default Hero;
