import React from "react";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div>
      <div className="mt-10 flex flex-col rounded-[12px] gap-3">
        <div>
          <img
            className="rounded-[12px]"
            src={url + item.poster_path}
            alt="movie image"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold font-[Inter] line-clamp-1">{item?.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
