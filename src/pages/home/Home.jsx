import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie");

  return (
    <div>
      <MovieView movies={data?.results}  />
    </div>
  );
};

export default React.memo(Home);
