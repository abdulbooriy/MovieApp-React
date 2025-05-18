import React from "react";
import { useNavigate } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";
import { PiBookmarkSimpleDuotone, PiBookmarkSimpleFill  } from "react-icons/pi";
import { useStateValue } from "@/context";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_IMAGE_URL;

  const [state, dispatch] = useStateValue();

  return (
    <div className="flex flex-col gap-3 mt-[40px]">
      <div className="w-[280px] overflow-hidden rounded-2xl relative">
        <img
          className="w-full h-[400px] rounded-[12px] hover:scale-120 transition-all duration-300 cursor-pointer object-cover text-white"
          src={url + item?.poster_path}
          alt="movie image"
          loading="lazy"
          onClick={() => navigate(`/movie/${item.id}`)}
        />
        <button
          onClick={() => dispatch({ type: "SAVED", payload: item })}
          className="absolute z-10 top-2 right-2 text-3xl p-1 w-[40px] h-[40px] bg-gray-400 rounded-full flex justify-center items-center cursor-pointer">
          {state.saved.some(({ id }) => id === item.id) ? (
            <PiBookmarkSimpleFill className="text-red-800"/>
          ) : (
            <PiBookmarkSimpleDuotone className="text-red-800" />
          )}
        </button>
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
