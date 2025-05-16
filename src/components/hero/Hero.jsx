import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { RiPlayLargeFill } from "react-icons/ri";

const Hero = ({ movies }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const url = import.meta.env.VITE_IMAGE_URL;

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
        className="w-[1360px] h-[640px] rounded-[12px] mx-auto relative">
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={url + item?.backdrop_path}
              alt={item?.original_title}
              className="hover:scale-120 duration-200"
            />
            <div className="w-[1200px] absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-[Inter] flex flex-col items-center gap-4">
              <h3 className="text-[32px] font-medium">{item.original_title}</h3>
              <ul className="flex gap-8 list-disc">
                <span>{item.release_date}</span>
                <li>1ч 34м</li>
                <li>EN</li>
                <li>6+</li>
              </ul>
              <button className="w-[380px] h-[52px] bg-[#fff] rounded-[12px] flex justify-center items-center gap-2 cursor-pointer">
                <RiPlayLargeFill className="text-[#C61F1F] text-2xl" />
                <span className="text-[#C61F1F] font-semibold">Смотреть</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center w-[100%] max-w-[950px] mx-auto mt-4 gap-3">
        <button className="custom-prev w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
          <FaAngleLeft />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-full h-[250px] rounded-[12px]">
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={url + item?.poster_path}
                alt={item?.original_title}
                className="rounded-[12px] w-full h-full object-cover hover:scale-105 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-next w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default Hero;