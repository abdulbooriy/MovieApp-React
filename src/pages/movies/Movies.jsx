import Genres from "@/components/genres/Genres";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";

const Movies = () => {
  const [genre, setGenre] = useState("")
  const { data, error, loading } = useFetch("/discover/movie", {
    page: 1,
    with_genres: genre,
    without_genres: "18,10749,36",
  });

  return (
    <div>
      <Genres setGenre={setGenre}/>
      <MovieView movies={data?.results} />
      {loading}
    </div>
  );
};

export default Movies;
