import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto pt-4 flex gap-3 overflow-auto scrollbar-hidden ">
      {data?.genres?.map((genre) => (
        <div
          key={genre.id}
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString())
              ? "bg-red-700 flex min-w-[136px] h-[48px] text-nowrap rounded-[12px] select-none items-center justify-center text-white cursor-pointer font-[Inter]"
              : "flex min-w-[136px] h-[48px] text-nowrap bg-[#1D1D1D] rounded-[12px] items-center justify-center text-white cursor-pointer font-[Inter]"
          } text-nowrap cursor-pointer select-none px-4 rounded-2xl`}>
          <span>{genre?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Genres;
