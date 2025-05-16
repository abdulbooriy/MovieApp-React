import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const MovieView = ({ movies }) => {

  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="flex w-[1308px] mx-auto justify-between items-center">
      <button className="curd-custom-prev w-[50px] h-[50px] bg-[#1D1D1D] mr-4 rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
        <FaAngleLeft />
      </button>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          nextEl: ".curd-custom-next",
          prevEl: ".curd-custom-prev",
        }}
        modules={[Navigation, Pagination]}
        className="container mx-auto mt-[118px] text-white">
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-[280px] my-5  rounded-[12px] flex flex-col gap-3 overflow-hidden">
              <img
                src={url + item.poster_path}
                className="w-full h-[400px] rounded-[12px] hover:scale-120 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div>
              <h3 className="line-clamp-1 text-2xl font-[Inter] font-medium">
                {item?.original_title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="curd-custom-next w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-[#C61F1F] flex justify-center items-center text-3xl cursor-pointer">
        <FaAngleRight />
      </button>
    </div>
  );
};

{
  /* <div>
  <h3>In the week</h3>
  <NavLink to={"/movies"}>Show all</NavLink>
</div>; */
}

export default React.memo(MovieView);
