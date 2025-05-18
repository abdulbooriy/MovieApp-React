import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigate, NavLink } from "react-router-dom";

const MovieView = ({ movies, loading }) => {
  
  return (
    <div className="container mx-auto mt-5 relative">
      <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10">
        <div className="swiper-button-prev-custom w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
          <FaAngleLeft />
        </div>
      </div>
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10">
        <div className="swiper-button-next-custom w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
          <FaAngleRight />
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation, Pagination]}
        style={{
          "--swiper-navigation-size": "0px",
        }}
        className="movie-swiper mt-10 !z-10">
        <div className="text-white flex w-full items-center text-[20px] font-medium font-[Inter] absolute top-0 justify-between ">
          <strong>In the week</strong>
          <div className="flex items-center gap-1 text-red-600">
            <NavLink to={"/movies"}>
              <span className="z-20 relative">Show All</span>
            </NavLink>
            
            <FaAngleRight />
          </div>
        </div>
        {movies?.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "280px" }}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(MovieView);
