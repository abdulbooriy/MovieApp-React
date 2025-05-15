import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="flex flex-col rounded-[12px] gap-3">
      <div className="w-[280px]">
        <img
          className="w-full h-[400px] rounded-[12px]"
          src={url + item.poster_path}
          alt="movie image"
          loading="lazy"
          onClick={() => navigate(`/movie/${item.id}`)}
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold font-[Inter] line-clamp-1">
          {item?.title}
        </h3>
      </div>
    </div>
  );
};

export default React.memo(Card);
