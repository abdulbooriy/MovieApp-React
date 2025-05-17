import React from "react";
import { useNavigate } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="flex flex-col gap-3 mt-[20px]">
      <div className="w-[280px] overflow-hidden rounded-2xl">
        <img
          className="w-full h-[400px] rounded-[12px] hover:scale-120 transition-all duration-300 cursor-pointer object-cover text-white"
          src={url + item?.poster_path}
          alt="movie image"
          loading="lazy"
          onClick={() => navigate(`/movie/${item.id}`)}
        />
      </div>
      <div className="text-white">
        <h3 className="text-2xl font-semibold font-[Inter] line-clamp-1">
          {item?.original_title}
        </h3>
        <div className="flex items-center gap-3 text-[20px]">
          <HiTrendingUp className="text-2xl" />
          <span>{item?.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
