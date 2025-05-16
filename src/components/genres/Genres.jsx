import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ setGenre }) => {
  const { data } = useFetch("/genre/movie/list");
  console.log(data?.genres);

  return (
    <div className="container mx-auto">
      <div className="flex w-full overflow-auto scrollbar-hidden gap-5 mt-12">
        {data?.genres?.map((genre) => (
          <div
            key={genre.id}
            className="flex min-w-[136px] h-[48px] text-nowrap bg-[#1D1D1D] rounded-[12px] items-center justify-center text-white"
            onClick={() => setGenre(genre.id.toString())}>
            <span>{genre?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
