import MovieView from "@/components/movie-view/MovieView";
import { useStateValue } from "@/context";
import React, { useEffect, useState } from "react";
import not_found_image from "@/assets/images/nodata-Photoroom.png";
import Skeleton from "@/components/skeleton/Skeleton";

const Saved = () => {
  const [state] = useStateValue();

  return (
    <div>
      {!state.saved || !state.saved.length ? (
        <div className="w-[500px] h-[350px] mx-auto flex justify-center items-center mt-[50px]">
          <img
            className="rounded-3xl "
            src={not_found_image}
            alt="not found image"
          />
        </div>
      ) : (
          <MovieView movies={state.saved} />
      )}
    </div>
  );
};

export default Saved;
