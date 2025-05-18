import MovieView from "@/components/movie-view/MovieView";
import { useStateValue } from "@/context";
import React from "react";
import not_found_image from "@/assets/images/pagenotfound__image.webp";

const Saved = () => {
  const [state] = useStateValue();

  return (
    <div>
      {!state.saved || !state.saved.length ? (
        <div className="flex justify-center items-center mt-[50px]">
          <img className="rounded-3xl " src={not_found_image} alt="not found image" />
        </div>
      ) : (
        <MovieView movies={state.saved} />
      )}
    </div>
  );
};

export default Saved;
