import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="mt-10 flex flex-col rounded-[12px] gap-3">
      <div>
        <img
          className="rounded-[12px] h-[420px]"
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
