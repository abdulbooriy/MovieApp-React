import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ setGenre }) => {
  const { data } = useFetch("/genre/movie/list");
  console.log(data?.genres);

  return (
    <div className="container mx-auto py-4">
      <div className="flex overflow-auto gap-5">
        {data?.genres?.map((genre) => (
          <div
            key={genre.id}
            className="text-nowrap"
            onClick={() => setGenre(genre.id.toString())}>
            {genre?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
